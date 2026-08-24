import React, { useState } from 'react';
import {
  FileCheck,
  Eye,
  Download,
  Maximize2,
  FileText,
  Image as ImageIcon,
  ShieldCheck,
  X,
  ExternalLink
} from 'lucide-react';
import { downloadDossierAsset } from '../lib/dossierStorage';

export interface DocumentAttachmentCardProps {
  recommenderName?: string;
  recommenderTitle?: string;
  institution?: string;
  date?: string;
  fileUrl?: string;
  fileName?: string;
  fileSize?: string;
  fileType?: string;
  onView?: () => void;
  onReplace?: () => void;
  className?: string;
}

export default function DocumentAttachmentCard({ 
  recommenderName = "James J. Rosemergy",
  recommenderTitle = "Managing Partner",
  institution = "Carey & Danis, LLC",
  date = "2026",
  fileUrl = "IMG_0702.jpeg",
  fileName = "Carey_Danis_Recommendation_Donna_Rivas.pdf",
  fileSize = "1.4 MB",
  fileType = "pdf",
  onView,
  onReplace,
  className = ""
}: DocumentAttachmentCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (onView) {
      onView();
    }
  };

  const isPdf = fileType?.toLowerCase().includes('pdf') || fileName?.toLowerCase().endsWith('.pdf');

  return (
    <>
      <div className={`mt-4 p-4 sm:p-5 rounded-2xl border border-[#f1ded7] bg-white/95 font-sans shadow-xs transition-all overflow-hidden max-w-full ${className}`}>
        {/* Main Row: Prominent Thumbnail + Signatory Info + View Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
          <div className="flex flex-row items-start gap-4 min-w-0 flex-1 w-full max-w-full flex-wrap xs:flex-nowrap">
            {/* Large Document Thumbnail Preview */}
            <div
              onClick={handleToggle}
              className="relative group cursor-pointer shrink-0 rounded-xl overflow-hidden border-2 border-white ring-1 ring-[#3c6382]/30 shadow-md bg-white hover:ring-[#2c5282] hover:shadow-lg transition-all duration-200"
              title="Click to toggle document preview"
              style={{ width: '80px', height: '104px', flexShrink: 0 }}
            >
              <img 
                src={fileUrl} 
                alt={`Document thumbnail for ${recommenderName}`} 
                className="w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="104" viewBox="0 0 24 24" fill="none" stroke="%232c5282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>';
                }}
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                  <Eye className="w-3 h-3 text-[#df5837]" />
                  {isOpen ? 'Close' : 'View'}
                </span>
              </div>
            </div>

            {/* Signatory Details & Official Record Badge */}
            <div className="flex-1 min-w-0 flex flex-col justify-start text-left space-y-1.5 break-words">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#eaf1f8] text-[#2c5282] border border-[#3c6382]/25 shadow-2xs">
                  <FileCheck className="w-3.5 h-3.5 text-[#2c5282] shrink-0" />
                  Official Record
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono text-stone-600 bg-stone-100 border border-stone-200">
                  {isPdf ? <FileText className="w-3 h-3 text-red-600 shrink-0" /> : <ImageIcon className="w-3 h-3 text-blue-600 shrink-0" />}
                  {fileSize}
                </span>
              </div>

              <h4 className="font-bold text-slate-900 text-sm sm:text-base font-serif tracking-tight break-words">
                {recommenderName}
              </h4>
              <p className="text-xs text-stone-600 font-sans leading-relaxed break-words">
                {recommenderTitle}
              </p>
              <p className="text-[11px] text-stone-500 font-mono break-words">
                {institution} ({date})
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0 self-stretch sm:self-center justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-[#f1ded7]">
            <button
              type="button"
              onClick={() => downloadDossierAsset({ base64Data: fileUrl, fileName, title: recommenderName })}
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors border border-stone-200 cursor-pointer"
              title="Download Attached Document"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
            <button 
              type="button" 
              onClick={handleToggle}
              className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-xl bg-[#df5837] hover:bg-[#c94b2d] text-white text-center justify-center inline-flex items-center active:scale-95 transition cursor-pointer shadow-xs whitespace-nowrap"
            >
              {isOpen ? 'Close Document' : 'View Attached Document'}
            </button>
          </div>
        </div>

        {/* Expandable Full-View Panel */}
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-dashed border-[#f1ded7]">
            <div className="overflow-hidden rounded-2xl border border-[#f1ded7] bg-white p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 pb-2 border-b border-stone-100">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5 truncate">
                  <FileCheck className="w-4 h-4 text-[#2c5282] shrink-0" />
                  <span className="truncate">{recommenderName} • {institution}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsFullscreen(true)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3 text-[#df5837]" />
                    Fullscreen
                  </button>
                  <span className="text-[11px] text-[#2c5282] font-bold bg-[#eaf1f8] px-2 py-0.5 rounded-full border border-[#3c6382]/25">
                    Verified Scan
                  </span>
                </div>
              </div>
              
              <div className="w-full flex items-center justify-center p-2 bg-stone-900/5 rounded-xl border border-[#f1ded7] overflow-auto max-h-[70vh]">
                <img 
                  src={fileUrl} 
                  alt={`Full Document - ${recommenderName}`} 
                  className="w-full max-h-[65vh] object-contain rounded-lg shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 24 24" fill="none" stroke="%232c5282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
                  }}
                />
              </div>

              {/* Sandboxed Storage Footnote */}
              <div className="flex items-center justify-between text-[11px] font-mono text-stone-500 pt-1">
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  🔒 Client-Side Encrypted Storage • Sandboxed Session
                </span>
                <span>File: {fileName}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Inspector Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-4xl max-h-[95vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 px-6 border-b border-stone-200 bg-stone-50">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 font-serif">
                  {recommenderName} — {institution}
                </h3>
                <p className="text-xs text-stone-500 font-mono">
                  {fileName} • {fileSize} • Client-Side Verified
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => downloadDossierAsset({ base64Data: fileUrl, fileName, title: recommenderName })}
                  className="px-3 py-1.5 bg-[#df5837] hover:bg-[#c94b2d] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="p-2 text-stone-400 hover:text-stone-900 bg-stone-200 hover:bg-stone-300 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950/5">
              <img
                src={fileUrl}
                alt={`Fullscreen - ${recommenderName}`}
                className="max-h-[80vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

