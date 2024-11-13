import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { XCircle } from 'lucide-react';

const ImageView: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const email = query.get('email');
  const prompt = query.get('prompt');
  const style = query.get('style');
  const imageUrl = location.pathname.split('/view/').pop();
  const decodedImageUrl = decodeURIComponent(imageUrl || '');
  const scrollPosition = location.state?.scrollPosition || 0;

  const handleClose = () => {
    // Preserve all existing URL parameters when closing
    const params = new URLSearchParams();
    if (email) params.set('email', email);
    if (prompt) params.set('prompt', prompt);
    if (style) params.set('style', style);
    if (decodedImageUrl) params.set('image', decodedImageUrl);
    
    // Pass the current state values back to the main route
    navigate(`/?${params.toString()}`, {
      replace: true,
      state: { 
        scrollPosition,
        prompt,
        style,
        image: decodedImageUrl
      }
    });
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={decodedImageUrl}
          alt="Generated artwork fullscreen"
          className="max-w-full max-h-full object-contain"
        />
        <button
          onClick={handleClose}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
        >
          <XCircle className="w-5 h-5" />
          Close Preview
        </button>
      </div>
    </div>
  );
};

export default ImageView;