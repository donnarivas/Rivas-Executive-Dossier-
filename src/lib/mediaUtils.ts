/**
 * Media Utility for Candidate Dossier
 * Detects, validates, and manages both image and video assets (MP4, WebM, MOV, JPEG, PNG, WebP)
 */

export const MAX_MEDIA_FILE_SIZE = 50 * 1024 * 1024; // 50MB limit

export const SUPPORTED_VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov', '.quicktime', '.m4v', '.ogv'];
export const SUPPORTED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

/**
 * Checks if a given media URL, data URL, or file name represents a video format
 */
export function isVideoMedia(url?: string | null): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim().toLowerCase();

  // Data URLs for video
  if (trimmed.startsWith('data:video/')) return true;

  // Blob URLs
  if (trimmed.startsWith('blob:')) {
    return true;
  }

  // Strip query strings and hashes
  const cleanUrl = trimmed.split('?')[0].split('#')[0];

  return SUPPORTED_VIDEO_EXTENSIONS.some(ext => cleanUrl.endsWith(ext));
}

/**
 * Validates an uploaded media file against size and mime type constraints
 */
export function validateMediaFile(file: File): {
  isValid: boolean;
  isVideo: boolean;
  isImage: boolean;
  error?: string;
} {
  if (file.size > MAX_MEDIA_FILE_SIZE) {
    return {
      isValid: false,
      isVideo: false,
      isImage: false,
      error: `File size (${(file.size / (1024 * 1024)).toFixed(1)}MB) exceeds the maximum 50MB limit.`
    };
  }

  const name = file.name.toLowerCase();
  const mime = file.type.toLowerCase();

  const isVideo = mime.startsWith('video/') || SUPPORTED_VIDEO_EXTENSIONS.some(ext => name.endsWith(ext));
  const isImage = mime.startsWith('image/') || SUPPORTED_IMAGE_EXTENSIONS.some(ext => name.endsWith(ext));

  if (!isVideo && !isImage) {
    return {
      isValid: false,
      isVideo: false,
      isImage: false,
      error: 'Unsupported format. Please upload MP4, WebM, MOV, JPEG, PNG, or WebP.'
    };
  }

  return {
    isValid: true,
    isVideo,
    isImage
  };
}

/**
 * IndexedDB helper for resilient high-capacity video & photo local caching
 */
function openMediaDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in this environment'));
      return;
    }
    const request = indexedDB.open('donna_rivas_media_vault', 1);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('media_store')) {
        db.createObjectStore('media_store');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Persists high-res photo or looping video data URL to IndexedDB & localStorage
 */
export async function persistMediaAsset(key: string, dataUrl: string | null): Promise<void> {
  try {
    if (dataUrl) {
      localStorage.setItem(key, dataUrl);
    } else {
      localStorage.removeItem(key);
    }
  } catch {
    // If quota exceeded (e.g. video files > 5MB), localStorage throws QuotaExceededError; IndexedDB handles it
  }

  try {
    const db = await openMediaDB();
    const tx = db.transaction(['media_store'], 'readwrite');
    const store = tx.objectStore('media_store');
    if (dataUrl) {
      store.put(dataUrl, key);
    } else {
      store.delete(key);
    }
  } catch (e) {
    console.warn('Notice saving media to IndexedDB vault:', e);
  }
}

/**
 * Retrieves persisted media from localStorage or IndexedDB
 */
export async function retrieveMediaAsset(key: string): Promise<string | null> {
  try {
    const val = localStorage.getItem(key);
    if (val) return val;
  } catch {
    // Fall through to IndexedDB
  }

  try {
    const db = await openMediaDB();
    return new Promise((resolve) => {
      const tx = db.transaction(['media_store'], 'readonly');
      const store = tx.objectStore('media_store');
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}
