import React from 'react';
import { ImageIcon, Settings, Download, Maximize2 } from 'lucide-react';

interface ImageDisplayProps {
  imageUrl?: string;
  loading?: boolean;
  email?: string;
  onFullscreen: () => void;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, loading, email, onFullscreen }) => {
  const handleDownload = async () => {
    if (!imageUrl) return;
    
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ai-generated-image.webp';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  if (loading) {
    return (
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-900/50 flex items-center justify-center">
        <Settings className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div className="space-y-4">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-900/50 relative group">
          <img 
            src={imageUrl} 
            alt="Generated artwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={onFullscreen}
              className="absolute inset-0 w-full h-full flex items-center justify-center gap-2 text-white font-medium"
            >
              <Maximize2 className="w-5 h-5" />
              View Fullscreen
            </button>
          </div>
        </div>
        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
        >
          <Download className="w-5 h-5" />
          Download Image
        </button>
      </div>
    );
  }

  return (
    <div className="aspect-square rounded-xl overflow-hidden bg-gray-900/50 flex flex-col items-center justify-center text-gray-400">
      <ImageIcon className="w-16 h-16 mb-4 opacity-50" />
      <p className="text-center px-8">
        Your AI-generated masterpiece will appear here
      </p>
    </div>
  );
};

export default ImageDisplay;