import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';

interface EmailConnectModalProps {
  onClose: () => void;
}

const EmailConnectModal: React.FC<EmailConnectModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address');
      return;
    }

    // Add email to URL and reload
    const url = new URL(window.location.href);
    url.searchParams.set('email', email);
    window.location.href = url.toString();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-md w-full border border-white/10 shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-bold text-white">Connect Your Email</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-300 mb-6">
            Enter your email address associated with your subscription to activate your plan.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email address"
                className="w-full bg-gray-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Connect Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailConnectModal;