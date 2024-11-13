import React from 'react';
import { Crown, Check, X } from 'lucide-react';

interface PremiumModalProps {
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl max-w-2xl w-full border border-white/10 shadow-2xl">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Upgrade to Premium</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-300 mb-8">
            You've reached the free tier limit. Upgrade to continue creating unlimited AI masterpieces!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Basic Plan</h3>
              <div className="text-3xl font-bold text-white mb-4">$50<span className="text-lg font-normal text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>500 generations per month</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Standard resolution</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Email support</span>
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/6oE6oBgyU1pc22s6or"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20 relative">
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Premium Plan</h3>
              <div className="text-3xl font-bold text-white mb-4">$100<span className="text-lg font-normal text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Unlimited generations</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>4K resolution output</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Custom styles</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Commercial license</span>
                </li>
              </ul>
              <a
                href="https://buy.stripe.com/9AQ8wJ1E03xkayY9AE"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-colors text-center"
              >
                Upgrade Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumModal;