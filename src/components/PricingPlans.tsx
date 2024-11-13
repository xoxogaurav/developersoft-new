import React from 'react';
import { Check, Crown, Star, Shield, Cpu, Award } from 'lucide-react';

const PricingPlans = () => {
  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Choose Your Creative Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Unlock the full potential of AI-powered image generation with our flexible plans designed for creators, artists, and visionaries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Basic Plan */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 relative group hover:border-blue-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent rounded-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Basic Plan</h3>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold text-white mb-2">$50<span className="text-xl font-normal text-gray-400">/month</span></div>
              <p className="text-gray-400">Perfect for individual creators and artists</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">500 generations</strong> per month</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">HD Quality</strong> image output (1024x1024)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">12 art styles</strong> to choose from</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Basic support</strong> via email</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Personal use</strong> license</span>
              </li>
            </ul>

            <a 
              href="https://buy.stripe.com/6oE6oBgyU1pc22s6or"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-colors mb-6 text-center"
            >
              Get Started
            </a>

            <p className="text-sm text-gray-400 text-center">
              No credit card required • 7-day money-back guarantee
            </p>
          </div>

          {/* Premium Plan */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 md:p-8 border border-purple-500/20 relative group hover:border-purple-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl pointer-events-none" />
            <div className="absolute -top-3 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Premium Plan</h3>
            </div>

            <div className="mb-8">
              <div className="text-4xl font-bold text-white mb-2">$100<span className="text-xl font-normal text-gray-400">/month</span></div>
              <p className="text-gray-400">For professional creators and businesses</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Unlimited generations</strong> - create without limits</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">4K Ultra HD</strong> image quality (4096x4096)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">All art styles</strong> + exclusive premium styles</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Priority generation</strong> - faster processing</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">24/7 priority support</strong> via email & chat</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Commercial license</strong> included</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">API access</strong> for integration</span>
              </li>
            </ul>

            <a 
              href="https://buy.stripe.com/9AQ8wJ1E03xkayY9AE"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 rounded-xl transition-colors mb-6 text-center"
            >
              Upgrade to Premium
            </a>

            <p className="text-sm text-gray-400 text-center">
              No credit card required • 7-day money-back guarantee
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
            <Shield className="w-8 h-8 text-blue-400 mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Enterprise-Grade Security</h4>
            <p className="text-gray-400 text-sm">Your prompts and generated images are protected with state-of-the-art encryption.</p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
            <Cpu className="w-8 h-8 text-purple-400 mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Advanced AI Technology</h4>
            <p className="text-gray-400 text-sm">Powered by the latest AI models for exceptional image quality and creativity.</p>
          </div>

          <div className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
            <Award className="w-8 h-8 text-yellow-400 mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Quality Guaranteed</h4>
            <p className="text-gray-400 text-sm">Not satisfied? Get your money back within 7 days, no questions asked.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;