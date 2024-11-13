import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 pt-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" />
            Privacy & Security
          </h3>
          <p className="text-gray-400 text-sm">
            We take your privacy seriously. Your prompts and generated images are never stored or shared.
            All data is processed securely and temporarily.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Terms of Use</h3>
          <p className="text-gray-400 text-sm">
            By using our service, you agree not to generate harmful or inappropriate content.
            All generated images are licensed under Creative Commons.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">About</h3>
          <p className="text-gray-400 text-sm">
            Our AI Image Creator uses cutting-edge technology to transform your ideas into stunning visuals.
            Perfect for artists, designers, and creators.
          </p>
        </div>
      </div>
      
      <div className="text-center text-gray-400 text-sm py-4 border-t border-white/10">
        <p className="flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-red-400" /> by AI Image Creator Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;