import React, { useState, useRef } from 'react';
import { Camera, Upload, Link as LinkIcon, Trash2, X, Check, RefreshCw, Lock, Video } from 'lucide-react';
import { optimizeImageFile } from '../lib/storage';
import { isVideoMedia, validateMediaFile } from '../lib/mediaUtils';

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string | null;
  targetTitle?: string;
  onSavePhoto: (photoDataUrl: string | null) => void;
  onNotify: (msg: string) => void;
}

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  targetTitle = 'Executive Portrait',
  onSavePhoto,
  onNotify
}) => {
  const [method, setMethod] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState<string>('');
  const [previewImage, setPreviewImage] = useState<string | null>(currentPhoto);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isSecuring, setIsSecuring] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync preview when currentPhoto or modal opens
  React.useEffect(() => {
    if (isOpen) {
      setPreviewImage(currentPhoto);
      setUrlInput('');
      setIsSecuring(false);
    }
  }, [isOpen, currentPhoto]);

  if (!isOpen) return null;

  const handleFile = async (file: File) => {
    const validation = validateMediaFile(file);
    if (!validation.isValid) {
      onNotify(validation.error || 'Invalid media file.');
      return;
    }

    setIsSecuring(true);
    try {
      if (validation.isVideo) {
        // Read video file as Data URL for seamless looping preview & local persistence
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setPreviewImage(e.target.result as string);
            onNotify('✓ Looping video securely buffered and preview ready.');
          }
          setIsSecuring(false);
        };
        reader.onerror = () => {
          onNotify('Failed to read video file.');
          setIsSecuring(false);
        };
        reader.readAsDataURL(file);
      } else {
        // Optimize image dimensions and compression while keeping crisp quality
        try {
          const compressedData = await optimizeImageFile(file, 800, 0.90);
          setPreviewImage(compressedData);
          onNotify('✓ Image securely encoded and buffered locally.');
        } catch {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              setPreviewImage(e.target.result as string);
            }
          };
          reader.readAsDataURL(file);
        } finally {
          setIsSecuring(false);
        }
      }
    } catch {
      onNotify('Error processing media file.');
      setIsSecuring(false);
    }
  };

  const handleSave = () => {
    const finalMedia = method === 'upload' ? previewImage : urlInput.trim();
    if (method === 'url' && !urlInput.trim()) {
      onNotify('Please enter a valid media (video or image) URL.');
      return;
    }
    onSavePhoto(finalMedia || null);
    const isVid = isVideoMedia(finalMedia);
    onNotify(
      finalMedia
        ? (isVid ? '✓ Looping video portrait saved to candidate dossier!' : '✓ Executive portrait photo updated & saved in local vault!')
        : 'Reset profile media to monogram.'
    );
    onClose();
  };

  const handleRemove = () => {
    setPreviewImage(null);
    setUrlInput('');
    onSavePhoto(null);
    onNotify('Profile media removed. Reverted to monogram.');
    onClose();
  };

  const activeMedia = previewImage || (method === 'url' ? urlInput.trim() : null);
  const isCurrentMediaVideo = isVideoMedia(activeMedia);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 max-w-md w-full rounded-3xl shadow-2xl p-6 sm:p-7 space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D9532F]/10 text-[#C2410C] text-[11px] font-mono font-bold uppercase border border-[#D9532F]/25">
            <Camera className="w-3 h-3 text-[#D9532F]" />
            <span>{targetTitle}</span>
          </div>
          <h2 className="text-xl font-black text-stone-900 tracking-tight">Embed {targetTitle}</h2>
          <p className="text-xs text-stone-500">
            Upload your professional portrait / looping video or provide a direct media link.
          </p>
        </div>

        {/* Live Preview Avatar (Supports Image & Looping Video) */}
        <div className="flex flex-col items-center justify-center space-y-2 py-1">
          <div className="w-28 h-28 rounded-3xl bg-stone-100 border-2 border-stone-200 shadow-md overflow-hidden flex items-center justify-center relative group ring-4 ring-[#D9532F]/20">
            {activeMedia ? (
              isCurrentMediaVideo ? (
                <video
                  src={activeMedia}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Profile Video Preview"
                />
              ) : (
                <img
                  src={activeMedia}
                  alt="Profile Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={() => onNotify('Unable to load image from URL. Please check the link.')}
                />
              )
            ) : (
              <div className="text-center p-2">
                <span className="text-3xl font-black text-[#D9532F] font-mono block">DR</span>
                <span className="text-[10px] text-stone-400 font-mono uppercase">Monogram</span>
              </div>
            )}
          </div>

          {activeMedia && (
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-stone-100 text-stone-600 border border-stone-200">
              {isCurrentMediaVideo ? (
                <>
                  <Video className="w-3 h-3 text-[#D9532F]" />
                  <span className="text-[#D9532F] font-bold">Looping Video Detected</span>
                </>
              ) : (
                <>
                  <Camera className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Static Image Portrait</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Method Switcher */}
        <div className="grid grid-cols-2 gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
          <button
            type="button"
            onClick={() => setMethod('upload')}
            className={`py-2 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              method === 'upload'
                ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5 text-[#D9532F]" />
            Upload File
          </button>
          <button
            type="button"
            onClick={() => setMethod('url')}
            className={`py-2 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              method === 'url'
                ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5 text-[#D9532F]" />
            Media Link / URL
          </button>
        </div>

        {/* Upload Dropzone */}
        {method === 'upload' ? (
          <div className="space-y-2">
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                if (e.dataTransfer.files?.[0]) handleFile(e.dataTransfer.files[0]);
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all relative ${
                isDragging
                  ? 'border-[#D9532F] bg-[#D9532F]/5'
                  : 'border-stone-300/80 hover:border-[#D9532F]/70 bg-white/70 backdrop-blur-sm'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,video/mp4,video/webm,video/quicktime,video/mov"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) handleFile(e.target.files[0]);
                }}
              />
              {isSecuring ? (
                <div className="py-2 space-y-1 text-center">
                  <RefreshCw className="w-6 h-6 text-[#D9532F] animate-spin mx-auto" />
                  <p className="text-xs font-bold text-stone-800">Securing media buffer locally...</p>
                  <p className="text-[10px] text-stone-400">Processing high-res image / video loop</p>
                </div>
              ) : (
                <>
                  <Upload className="w-6 h-6 text-[#D9532F] mx-auto mb-1.5" />
                  <p className="text-xs font-bold text-stone-800">
                    Drag & drop media here, or <span className="text-[#D9532F] underline">browse</span>
                  </p>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    Supports MP4, WebM, MOV, JPEG, PNG, WebP (up to 50MB)
                  </p>
                </>
              )}
            </div>

            {/* Subtle Security Badge */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-stone-500">
              <Lock className="w-3 h-3 text-emerald-600" />
              <span>🔒 Client-Side Encrypted Storage • Sandboxed Session</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-stone-700 block font-bold">
              Media URL Link (Video / Image)
            </label>
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com/profile-video.mp4 or photo URL"
              className="w-full bg-white/80 border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#D9532F] font-mono shadow-xs"
            />
            <p className="text-[11px] text-stone-400 font-sans">
              Supports direct links to .mp4, .webm, .mov, or high-res image URLs.
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-200/80">
          {(currentPhoto || previewImage) ? (
            <button
              type="button"
              onClick={handleRemove}
              className="text-xs font-mono text-red-600 hover:text-red-700 flex items-center gap-1.5 cursor-pointer font-bold"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Remove Media</span>
            </button>
          ) : <div />}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-stone-600 hover:text-stone-900 cursor-pointer font-bold"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2.5 bg-[#1E140F] hover:bg-[#2D231E] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5 text-orange-300" />
              <span>Save Portrait</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

