import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  href: string;
  fileName: string;
  buttonText: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  fileName,
  buttonText,
}) => {
  return (
    <a
      href={href}
      download={fileName}
      className="inline-flex items-center gap-3 px-8 py-4 border-2 border-neon-green text-neon-green rounded-full transition-all duration-300 hover:bg-neon-green hover:text-dark-bg hover:shadow-lg hover:shadow-neon-green/30"
    >
      <Download size={24} />
      <span className="font-bold">{buttonText}</span>
    </a>
  );
};

export default DownloadButton; 