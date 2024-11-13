import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-black"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
      >
        <X className="w-8 h-8" />
      </button>
      <img
        src={imageUrl}
        alt="Generated artwork fullscreen"
        className="w-full h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageModal;