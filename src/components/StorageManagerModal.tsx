import React, { useState, useEffect } from 'react';
import {
  HardDrive,
  Trash2,
  Download,
  ShieldCheck,
  X,
  FileText,
  Image as ImageIcon,
  CheckCircle2,
  RefreshCw,
  Eye,
  AlertTriangle,
  Layers,
  Lock
} from 'lucide-react';
import { DossierStorage, DossierAsset, StorageStats, downloadDossierAsset } from '../lib/dossierStorage';

interface StorageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const StorageManagerModal: React.FC<StorageManagerModalProps> = ({
  isOpen,
  onClose,
  onNotify
}) => {
  const [assets, setAssets] = useState<DossierAsset[]>([]);
  const [stats, setStats] = useState<StorageStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [confirmPurge, setConfirmPurge] = useState<boolean>(false);
  const [selectedPreview, setSelectedPreview] = useState<DossierAsset | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [allAssets, currentStats] = await Promise.all([
        DossierStorage.getAllAssets(),
        DossierStorage.getStorageStats()
      ]);
      setAssets(allAssets);
      setStats(currentStats);
    } catch (err) {
      console.warn('Failed to query storage stats', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
      setConfirmPurge(false);
      setSelectedPreview(null);
    }
  }, [isOpen]);

  useEffect(() => {
    const unsubscribe = DossierStorage.subscribe(() => {
      loadData();
    });
    return unsubscribe;
  }, []);

  if (!isOpen) return null;

  const handleDelete = async (id: string, name: string) => {
    try {
      await DossierStorage.deleteAsset(id);
      onNotify(`Deleted "${name}" from local encrypted cache.`);
      await loadData();
    } catch {
      onNotify('Failed to delete asset.');
    }
  };

  const handlePurgeAll = async () => {
    try {
      await DossierStorage.purgeAll();
      onNotify('✓ Successfully wiped all client-side sandboxed document storage.');
      setConfirmPurge(false);
      await loadData();
    } catch {
      onNotify('Failed to purge storage.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white border border-stone-200 max-w-2xl w-full rounded-3xl shadow-2xl p-6 sm:p-7 space-y-6 relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#df5837]/10 text-[#df5837] text-[11px] font-mono font-bold uppercase border border-[#df5837]/25">
            <HardDrive className="w-3.5 h-3.5" />
            <span>IndexedDB Sandboxed Engine</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight flex items-center gap-2">
            Local Dossier Storage Vault
          </h2>
          <p className="text-xs text-stone-500">
            High-capacity browser storage for official documents, letters, credentials & media (25MB/file limit).
          </p>
        </div>

        {/* Storage Health & Stats Widget */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
            <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">
              Stored Assets
            </span>
            <span className="text-xl font-bold font-mono text-stone-900">
              {stats?.totalCount ?? 0} <span className="text-xs font-normal text-stone-500">files</span>
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
            <span className="text-[10px] font-mono uppercase text-stone-500 font-bold block">
              Vault Capacity Used
            </span>
            <span className="text-xl font-bold font-mono text-[#df5837]">
              {stats?.formattedSize ?? '0 B'}
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col justify-between">
            <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Privacy Shield
            </span>
            <span className="text-xs font-bold text-emerald-900">
              Sandboxed Locally
            </span>
          </div>
        </div>

        {/* Security Badge Banner */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-mono">
          <Lock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <span>🔒 Client-Side Encrypted Storage • Sandboxed Session (No Plain URL Leaks)</span>
        </div>

        {/* File Assets List */}
        <div className="flex-1 overflow-y-auto min-h-[160px] max-h-[340px] space-y-2 pr-1 custom-scrollbar">
          {isLoading ? (
            <div className="py-12 text-center text-xs font-mono text-stone-500 space-y-2">
              <RefreshCw className="w-5 h-5 text-[#df5837] animate-spin mx-auto" />
              <p>Scanning IndexedDB Vault...</p>
            </div>
          ) : assets.length === 0 ? (
            <div className="py-10 text-center rounded-2xl border-2 border-dashed border-stone-200 p-6 space-y-2">
              <HardDrive className="w-8 h-8 text-stone-300 mx-auto" />
              <p className="text-xs font-bold text-stone-700">No Custom Files Uploaded Yet</p>
              <p className="text-[11px] text-stone-400 max-w-sm mx-auto">
                Documents uploaded via the Recommendation Cards or Credentials Showcase will be saved directly into this local storage vault.
              </p>
            </div>
          ) : (
            assets.map((asset) => (
              <div
                key={asset.id}
                className="p-3 rounded-2xl border border-stone-200 bg-white hover:border-[#df5837]/60 hover:shadow-xs transition-all flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0 text-[#df5837]">
                    {asset.fileType === 'pdf' ? (
                      <FileText className="w-5 h-5 text-red-600" />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-stone-900 truncate" title={asset.fileName}>
                      {asset.fileName}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-stone-500">
                      <span className="uppercase px-1.5 py-0.2 rounded bg-stone-100 border border-stone-200 text-stone-700">
                        {asset.category}
                      </span>
                      <span>•</span>
                      <span>{asset.fileSize}</span>
                      <span>•</span>
                      <span>{new Date(asset.timestamp).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => downloadDossierAsset(asset)}
                    className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors cursor-pointer"
                    title="Download Asset"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPreview(asset)}
                    className="p-2 text-stone-600 hover:text-[#df5837] hover:bg-[#df5837]/10 rounded-xl transition-colors cursor-pointer"
                    title="Inspect Base64 Data"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(asset.id, asset.fileName)}
                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                    title="Delete File"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Preview Inspector Modal overlay */}
        {selectedPreview && (
          <div className="p-4 rounded-2xl bg-stone-900 text-white space-y-3 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-orange-400">
                Preview: {selectedPreview.fileName} ({selectedPreview.fileSize})
              </span>
              <button
                onClick={() => setSelectedPreview(null)}
                className="text-stone-400 hover:text-white p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="max-h-48 overflow-auto rounded-xl bg-stone-950 p-2 text-[10px] font-mono text-stone-400 border border-stone-800">
              {selectedPreview.fileType === 'pdf' ? (
                <div className="text-center py-6 space-y-2">
                  <FileText className="w-8 h-8 text-red-400 mx-auto" />
                  <p className="text-xs text-stone-300">Sandboxed PDF Document ({selectedPreview.fileSize})</p>
                  <button
                    onClick={() => downloadDossierAsset(selectedPreview)}
                    className="px-3 py-1.5 bg-[#df5837] hover:bg-[#c94b2d] text-white rounded-lg text-xs font-sans font-bold inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3 h-3" />
                    Download PDF File
                  </button>
                </div>
              ) : (
                <img
                  src={selectedPreview.base64Data}
                  alt="Preview"
                  className="max-h-40 mx-auto object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-stone-200">
          {!confirmPurge ? (
            <button
              type="button"
              disabled={assets.length === 0}
              onClick={() => setConfirmPurge(true)}
              className="text-xs font-mono text-red-600 hover:text-red-700 flex items-center gap-1.5 cursor-pointer font-bold disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Purge Local Storage Vault</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-red-700 font-bold">Confirm wipe?</span>
              <button
                type="button"
                onClick={handlePurgeAll}
                className="px-2.5 py-1 bg-red-600 text-white rounded-lg text-xs font-mono font-bold hover:bg-red-700 cursor-pointer"
              >
                Yes, Purge
              </button>
              <button
                type="button"
                onClick={() => setConfirmPurge(false)}
                className="px-2.5 py-1 bg-stone-200 text-stone-700 rounded-lg text-xs font-mono font-bold hover:bg-stone-300 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono uppercase tracking-wider font-bold rounded-xl transition-all cursor-pointer"
          >
            Close Vault
          </button>
        </div>
      </div>
    </div>
  );
};
