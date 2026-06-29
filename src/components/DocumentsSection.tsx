import { useState } from 'react';
import { Award, Download, Eye, FileText, X } from 'lucide-react';
import {
  certificates,
  fileNameFromPath,
  isImageFile,
  isPdfFile,
  resume,
  type DocumentFile,
} from '../data/documents';

type PreviewState = DocumentFile | null;

function PreviewModal({ doc, onClose }: { doc: DocumentFile; onClose: () => void }) {
  const isPdf = isPdfFile(doc.file);
  const isImage = isImageFile(doc.file);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${doc.title}`}
    >
      <div
        className="glass-card w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 p-4 border-b border-white/10">
          <div>
            <h3 className="font-semibold text-white text-sm sm:text-base">{doc.title}</h3>
            {doc.subtitle && <p className="text-xs text-gray-400 mt-0.5">{doc.subtitle}</p>}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={doc.file}
              download={fileNameFromPath(doc.file)}
              className="btn-outline flex items-center gap-1.5 text-xs px-3 py-2"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              aria-label="Close preview"
            >
              <X className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-navy-900/50 min-h-[300px]">
          {isPdf && (
            <iframe
              src={`${doc.file}#toolbar=1&navpanes=0`}
              title={doc.title}
              className="w-full h-[70vh] border-0"
            />
          )}
          {isImage && (
            <div className="flex items-center justify-center p-4">
              <img src={doc.file} alt={doc.title} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
            </div>
          )}
          {!isPdf && !isImage && (
            <div className="flex flex-col items-center justify-center h-[300px] text-gray-400 text-sm gap-3 p-6 text-center">
              <FileText className="w-12 h-12 text-neon-purple/50" />
              <p>Preview is not available for this file type.</p>
              <a href={doc.file} download className="btn-gradient text-sm">
                Download file
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DocumentActions({ doc, onPreview }: { doc: DocumentFile; onPreview: () => void }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <button onClick={onPreview} className="btn-outline flex items-center gap-2 text-xs sm:text-sm flex-1 justify-center">
        <Eye className="w-4 h-4" /> Preview
      </button>
      <a
        href={doc.file}
        download={fileNameFromPath(doc.file)}
        className="btn-gradient flex items-center gap-2 text-xs sm:text-sm flex-1 justify-center"
      >
        <Download className="w-4 h-4" /> Download
      </a>
    </div>
  );
}

function EmptyUploadHint({ folder }: { folder: 'resume' | 'certificates' }) {
  const path =
    folder === 'resume'
      ? 'project/public/resume/resume.pdf'
      : 'project/public/certificates/your-file.pdf';

  return (
    <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] p-5 text-center">
      <FileText className="w-10 h-10 text-neon-purple/40 mx-auto mb-3" />
      <p className="text-sm text-gray-400 mb-2">No file uploaded yet</p>
      <p className="text-xs text-gray-500 leading-relaxed">
        Copy your {folder === 'resume' ? 'resume' : 'certificate'} into:
        <br />
        <code className="text-neon-cyan/80 mt-1 inline-block">{path}</code>
        <br />
        Then update <code className="text-neon-cyan/80">src/data/documents.ts</code>
      </p>
    </div>
  );
}

export default function DocumentsSection() {
  const [preview, setPreview] = useState<PreviewState>(null);

  return (
    <>
      <section id="documents" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-12">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Resume column */}
          <div className="glass-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-neon-blue" />
              Resume
            </h2>
            <p className="text-sm text-gray-400">Download or preview my latest resume.</p>

            <div className="glass-card p-5 border-neon-blue/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-blue-500/20 shrink-0">
                  <FileText className="w-8 h-8 text-neon-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm">{resume.title}</h3>
                  {resume.subtitle && <p className="text-xs text-gray-400 mt-1">{resume.subtitle}</p>}
                  <p className="text-xs text-gray-500 mt-2 truncate">{resume.file}</p>
                  <DocumentActions doc={resume} onPreview={() => setPreview(resume)} />
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Tip: Replace <code className="text-neon-cyan/70">public/resume/resume.pdf</code> with your PDF to update
              it.
            </p>
          </div>

          {/* Certificates column */}
          <div className="glass-card p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-neon-purple" />
              Certificates
            </h2>
            <p className="text-sm text-gray-400">Achievements, workshops, and hackathon certificates.</p>

            {certificates.length === 0 ? (
              <EmptyUploadHint folder="certificates" />
            ) : (
              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1">
                {certificates.map((cert) => (
                  <div
                    key={cert.file}
                    className="glass-card p-4 flex items-start gap-3 hover:border-neon-purple/20 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-neon-purple/10 shrink-0">
                      <Award className="w-5 h-5 text-neon-purple" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-white text-sm">{cert.title}</h3>
                      {cert.subtitle && <p className="text-xs text-gray-400">{cert.subtitle}</p>}
                      {cert.date && <p className="text-xs text-neon-cyan mt-0.5">{cert.date}</p>}
                      <DocumentActions doc={cert} onPreview={() => setPreview(cert)} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {preview && <PreviewModal doc={preview} onClose={() => setPreview(null)} />}
    </>
  );
}
