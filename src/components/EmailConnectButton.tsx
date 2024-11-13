import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import EmailConnectModal from './EmailConnectModal';

const EmailConnectButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10 transition-all"
      >
        <Mail className="w-4 h-4" />
        <span>Connect Email</span>
      </button>

      {showModal && <EmailConnectModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default EmailConnectButton;