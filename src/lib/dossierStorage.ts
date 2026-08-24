/**
 * Unified Client-Side IndexedDB Storage Engine for Donna Rivas Executive Dossier
 * 
 * Features:
 * - High-capacity browser-sandboxed storage bypassing localStorage 5MB limits (supports up to 25MB+ per file).
 * - Object store 'uploaded_assets' supporting PDFs, PNG/JPG/WebP images, and DOCX documents.
 * - Client-side sanitization, strict file-type & size validation (up to 25MB).
 * - Two-way broadcast events for instant UI synchronization & auto-rehydration.
 * - Secure local purge / wipe utilities.
 */

export interface DossierAsset {
  id: string;
  category: 'recommendations' | 'credentials' | 'headshot' | 'case_briefs' | 'endorsements' | 'custom' | string;
  fileName: string;
  fileType: 'pdf' | 'png' | 'jpg' | 'jpeg' | 'webp' | 'docx' | 'doc' | string;
  mimeType: string;
  fileSize: string;
  fileSizeBytes: number;
  base64Data: string; // Data URL for direct <img>, <iframe>, <object>, download
  timestamp: number;
  metadata?: Record<string, any>;
}

export interface StorageStats {
  totalCount: number;
  totalSizeBytes: number;
  formattedSize: string;
  categories: Record<string, number>;
}

const DB_NAME = 'donna_rivas_oaklin_dossier_db';
const DB_VERSION = 1;
const STORE_NAME = 'uploaded_assets';

export const MAX_FILE_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB Limit
export const ALLOWED_EXTENSIONS = ['.pdf', '.png', '.jpg', '.jpeg', '.webp', '.docx', '.doc', '.mp4', '.webm', '.mov', '.quicktime'];
export const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/webp',
  'video/mp4',
  'video/webm',
  'video/quicktime',
  'video/mov',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword'
];

type StorageEventListener = (event: { type: 'saved' | 'deleted' | 'purged'; assetId?: string; asset?: DossierAsset }) => void;
const listeners = new Set<StorageEventListener>();

/**
 * Formats byte size into human-readable string (KB/MB)
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/**
 * Validates a file against security constraints
 */
export function validateDossierFile(file: File): { isValid: boolean; error?: string; fileType: string; mimeType: string } {
  const extension = '.' + file.name.split('.').pop()?.toLowerCase();
  
  if (!ALLOWED_EXTENSIONS.includes(extension)) {
    return {
      isValid: false,
      error: `Invalid file type "${extension}". Supported types: PDF, PNG, JPG, JPEG, WEBP, DOCX, MP4, WebM, MOV.`,
      fileType: extension.replace('.', ''),
      mimeType: file.type || 'application/octet-stream'
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      isValid: false,
      error: `File size (${formatBytes(file.size)}) exceeds the maximum 50MB limit.`,
      fileType: extension.replace('.', ''),
      mimeType: file.type || 'application/octet-stream'
    };
  }

  let determinedType: string = extension.replace('.', '');
  if (file.type.includes('pdf') || extension === '.pdf') determinedType = 'pdf';
  else if (file.type.startsWith('video/') || ['.mp4', '.webm', '.mov', '.quicktime'].includes(extension)) determinedType = 'video';
  else if (file.type.startsWith('image/')) determinedType = 'image';
  else if (extension === '.docx' || extension === '.doc') determinedType = 'docx';

  return {
    isValid: true,
    fileType: determinedType,
    mimeType: file.type || 'application/octet-stream'
  };
}

/**
 * Initializes and returns the IndexedDB database instance
 */
function openDossierDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB is not supported in this environment.'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        store.createIndex('category', 'category', { unique: false });
        store.createIndex('timestamp', 'timestamp', { unique: false });
        store.createIndex('fileName', 'fileName', { unique: false });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error || new Error('Failed to open IndexedDB database.'));
    };
  });
}

/**
 * Core Unified Storage Class
 */
export class DossierStorage {
  /**
   * Save or replace an asset in IndexedDB
   */
  static async saveAsset(asset: DossierAsset): Promise<DossierAsset> {
    const db = await openDossierDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(asset);

      request.onsuccess = () => {
        // Broadcast change to all listeners
        listeners.forEach(fn => fn({ type: 'saved', assetId: asset.id, asset }));
        resolve(asset);
      };

      request.onerror = () => {
        reject(request.error || new Error(`Failed to save asset ${asset.id}`));
      };
    });
  }

  /**
   * Retrieve an asset by its unique ID
   */
  static async getAsset(id: string): Promise<DossierAsset | null> {
    const db = await openDossierDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);

      request.onsuccess = () => {
        resolve(request.result || null);
      };

      request.onerror = () => {
        reject(request.error || new Error(`Failed to get asset ${id}`));
      };
    });
  }

  /**
   * Retrieve all stored assets
   */
  static async getAllAssets(): Promise<DossierAsset[]> {
    const db = await openDossierDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result || []);
      };

      request.onerror = () => {
        reject(request.error || new Error('Failed to load assets.'));
      };
    });
  }

  /**
   * Retrieve all assets under a specific category
   */
  static async getAssetsByCategory(category: string): Promise<DossierAsset[]> {
    const db = await openDossierDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const index = store.index('category');
      const request = index.getAll(category);

      request.onsuccess = () => {
        resolve(request.result || []);
      };

      request.onerror = () => {
        reject(request.error || new Error(`Failed to load category ${category}`));
      };
    });
  }

  /**
   * Delete an asset by ID
   */
  static async deleteAsset(id: string): Promise<boolean> {
    const db = await openDossierDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => {
        listeners.forEach(fn => fn({ type: 'deleted', assetId: id }));
        resolve(true);
      };

      request.onerror = () => {
        reject(request.error || new Error(`Failed to delete asset ${id}`));
      };
    });
  }

  /**
   * Purge all local assets and wipe database
   */
  static async purgeAll(): Promise<void> {
    const db = await openDossierDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onsuccess = () => {
        listeners.forEach(fn => fn({ type: 'purged' }));
        resolve();
      };

      request.onerror = () => {
        reject(request.error || new Error('Failed to purge assets.'));
      };
    });
  }

  /**
   * Calculate storage analytics & metrics
   */
  static async getStorageStats(): Promise<StorageStats> {
    const all = await this.getAllAssets();
    let totalSizeBytes = 0;
    const categories: Record<string, number> = {};

    all.forEach(item => {
      const size = item.fileSizeBytes || item.base64Data?.length || 0;
      totalSizeBytes += size;
      categories[item.category] = (categories[item.category] || 0) + 1;
    });

    return {
      totalCount: all.length,
      totalSizeBytes,
      formattedSize: formatBytes(totalSizeBytes),
      categories
    };
  }

  /**
   * Ingest and securely convert File to base64 Data URL and persist to IndexedDB
   */
  static async ingestAndStoreFile(
    file: File,
    options: {
      id?: string;
      category: string;
      metadata?: Record<string, any>;
    }
  ): Promise<DossierAsset> {
    const validation = validateDossierFile(file);
    if (!validation.isValid) {
      throw new Error(validation.error || 'Invalid file format.');
    }

    const id = options.id || `asset-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    const base64Data = await readFileAsDataUrl(file);

    const asset: DossierAsset = {
      id,
      category: options.category,
      fileName: file.name,
      fileType: validation.fileType,
      mimeType: validation.mimeType,
      fileSize: formatBytes(file.size),
      fileSizeBytes: file.size,
      base64Data,
      timestamp: Date.now(),
      metadata: options.metadata || {}
    };

    return await this.saveAsset(asset);
  }

  /**
   * Subscribe to real-time storage modifications
   */
  static subscribe(listener: StorageEventListener): () => void {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }
}

/**
 * Helper to convert a File to Base64 Data URL
 */
function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read file from disk.'));
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Expected string data URL from file reader.'));
      }
    };
    reader.readAsDataURL(file);
  });
}

/**
 * Downloads a base64 or blob document directly to the client
 */
export function downloadDossierAsset(asset: DossierAsset | { base64Data?: string; fileName?: string; documentUrl?: string; title?: string }) {
  const url = ('base64Data' in asset && asset.base64Data) ? asset.base64Data : (asset as any).documentUrl;
  if (!url) return;

  const fileName = asset.fileName || `${(asset as any).title || 'Dossier_Document'}.pdf`;
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
