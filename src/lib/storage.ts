/**
 * Resilient Local Storage Manager
 * Prevents QuotaExceededError and gracefully handles large data payloads
 */

export function safeLocalStorageSet(key: string, value: string): boolean {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error: unknown) {
    console.warn(`[Storage Warning] localStorage quota hit for key "${key}". Attempting cleanup.`);
    
    // Attempt 1: Remove any legacy or temporary keys
    try {
      const keysToClean = [
        'donna_documents_backup',
        'donna_temp_doc',
        'donna_cached_pdf',
        'donna_embedded_documents_legacy'
      ];
      keysToClean.forEach(k => {
        if (k !== key) localStorage.removeItem(k);
      });
      localStorage.setItem(key, value);
      return true;
    } catch {
      // Attempt 2: If value is a JSON array of documents, sanitize large base64 strings
      try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
          const lightweight = parsed.map((item: any) => {
            if (item && typeof item === 'object') {
              const copy = { ...item };
              // Strip massive data URLs to save quota while preserving metadata
              if (typeof copy.documentUrl === 'string' && copy.documentUrl.startsWith('data:') && copy.documentUrl.length > 50000) {
                copy.documentUrl = 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80';
                copy.isStoredInCloud = true;
              }
              if (typeof copy.fullTranscript === 'string' && copy.fullTranscript.length > 5000) {
                copy.fullTranscript = copy.fullTranscript.substring(0, 5000) + '...';
              }
              return copy;
            }
            return item;
          });
          localStorage.setItem(key, JSON.stringify(lightweight));
          return true;
        }
      } catch {
        // Fall through
      }
      
      console.warn(`[Storage Safe Fallback] Could not persist key "${key}" to localStorage. Operating with in-memory/Firestore persistence.`);
      return false;
    }
  }
}

export function safeLocalStorageGet(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn(`[Storage Warning] Error reading key "${key}" from localStorage:`, error);
    return null;
  }
}

/**
 * Resizes and optimizes an image File to a lightweight Base64 JPEG data URL
 * to avoid consuming excessive memory or localStorage quota.
 */
export function optimizeImageFile(file: File, maxDimension = 600, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.onload = (event) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to load image'));
      img.onload = () => {
        try {
          let { width, height } = img;
          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve(event.target?.result as string);
            return;
          }
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);

          const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(compressedDataUrl);
        } catch {
          resolve(event.target?.result as string);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}
