/**
 * Resume & certificates — files live in project/public/resume and project/public/certificates
 */

export type DocumentFile = {
  file: string;
  title: string;
  subtitle?: string;
  date?: string;
};

export const resume: DocumentFile = {
  file: '/resume/resume.pdf',
  title: 'Renuka Choudhary — Resume',
  subtitle: 'CSE (AI & ML) — 2nd Year',
};

export const certificates: DocumentFile[] = [
  {
    file: '/certificates/certificate-renuka-chaudhary.pdf',
    title: 'Certificate of Achievement',
    subtitle: 'Renuka Choudhary',
    date: '2025',
  },
  {
    file: '/certificates/nptel-cpp-certificate.pdf',
    title: 'NPTEL — C++ Programming',
    subtitle: 'NPTEL Online Certification',
    date: '2025',
  },
  {
    file: '/certificates/artificial-intelligence-foundation.pdf',
    title: 'Artificial Intelligence Foundation',
    subtitle: 'Foundation Certification',
    date: '2025',
  },
  {
    file: '/certificates/python-foundation-certificate.pdf',
    title: 'Python Foundation',
    subtitle: 'Foundation Certification',
    date: '2025',
  },
];

export function isImageFile(path: string): boolean {
  return /\.(png|jpe?g|webp|gif)$/i.test(path);
}

export function isPdfFile(path: string): boolean {
  return /\.pdf$/i.test(path);
}

export function fileNameFromPath(path: string): string {
  return path.split('/').pop() ?? 'document';
}
