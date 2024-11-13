import React, { useState } from 'react';
import { ImageIcon, Loader2, Wand2, ChevronDown, Check, Lock, Mail, AlertCircle } from 'lucide-react';

interface GeneratorFormProps {
  prompt: string;
  style: string;
  aspectRatio: string;
  loading: boolean;
  disabled?: boolean;
  email?: string;
  remainingGenerations?: number;
  onPromptChange: (value: string) => void;
  onStyleChange: (value: string) => void;
  onAspectRatioChange: (value: string) => void;
  onGenerate: () => void;
}

const aspectRatios = [
  { ratio: '1:1', label: 'Square', description: 'Perfect for social media posts' },
  { ratio: '16:9', label: 'Landscape HD', description: 'Ideal for desktop wallpapers' },
  { ratio: '9:16', label: 'Mobile Portrait', description: 'Best for mobile wallpapers and stories' },
  { ratio: '4:3', label: 'Classic', description: 'Traditional monitor format' },
  { ratio: '3:2', label: 'Photo', description: 'Standard photography ratio' },
  { ratio: '21:9', label: 'Ultrawide', description: 'For ultrawide monitors' },
  { ratio: '2:3', label: 'Mobile Classic', description: 'Traditional mobile format' },
  { ratio: '19.5:9', label: 'Modern Mobile', description: 'Modern smartphone ratio' }
];

const styleOptions = [
  { name: 'Photorealistic', description: 'Ultra-realistic photography style' },
  { name: 'Anime', description: 'Japanese animation style' },
  { name: 'Digital Art', description: 'Modern digital illustration' },
  { name: 'Oil Painting', description: 'Traditional oil painting technique' },
  { name: 'Watercolor', description: 'Soft watercolor painting style' },
  { name: 'Pencil Sketch', description: 'Hand-drawn pencil artwork' },
  { name: 'Cyberpunk', description: 'Futuristic cyberpunk aesthetic' },
  { name: 'Fantasy', description: 'Magical fantasy artwork' },
  { name: 'Abstract', description: 'Non-representational art' },
  { name: 'Minimalist', description: 'Simple, clean design' },
  { name: 'Pop Art', description: 'Bold, colorful pop art style' },
  { name: 'Steampunk', description: 'Victorian-era sci-fi style' }
];

const GeneratorForm: React.FC<GeneratorFormProps> = ({
  prompt,
  style,
  aspectRatio,
  loading,
  disabled,
  email,
  remainingGenerations = 0,
  onPromptChange,
  onStyleChange,
  onAspectRatioChange,
  onGenerate,
}) => {
  const [isStyleListOpen, setIsStyleListOpen] = useState(false);
  const [isAspectRatioListOpen, setIsAspectRatioListOpen] = useState(false);
  const selectedStyle = styleOptions.find(option => option.name === style);
  const selectedAspectRatio = aspectRatios.find(option => option.ratio === aspectRatio);

  return (
    <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 md:p-6 border border-white/10">
      {/* Status Bar */}
      <div className="mb-6 p-3 rounded-lg bg-gray-900/50 flex items-center justify-between">
        {email ? (
          <div className="flex items-center gap-2 text-green-400">
            <Mail className="w-4 h-4" />
            <span className="text-sm">Connected: {email}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-yellow-400">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{remainingGenerations} free generations remaining</span>
          </div>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-2">Your Vision</label>
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="Describe the image you want to create in detail..."
          className="w-full h-32 bg-gray-900/50 rounded-xl p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          disabled={disabled}
        />
      </div>
      
      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-300 mb-2">Art Style</label>
        <button
          onClick={() => setIsStyleListOpen(!isStyleListOpen)}
          className="w-full bg-gray-900/50 text-left p-3 rounded-lg flex items-center justify-between hover:bg-gray-800/50 transition-colors"
          disabled={disabled}
        >
          <span className="text-gray-300">
            {selectedStyle ? selectedStyle.name : 'Select a style'}
          </span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isStyleListOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isStyleListOpen && (
          <div className="absolute z-50 mt-2 w-full bg-gray-900 rounded-xl shadow-xl border border-white/10 max-h-64 overflow-y-auto custom-scrollbar">
            {styleOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => {
                  onStyleChange(option.name);
                  setIsStyleListOpen(false);
                }}
                className="w-full text-left p-3 hover:bg-gray-800 flex items-center justify-between group"
              >
                <div>
                  <div className="font-medium text-white">{option.name}</div>
                  <div className="text-sm text-gray-400">{option.description}</div>
                </div>
                {style === option.name && (
                  <Check className="w-5 h-5 text-blue-500" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-300 mb-2">Aspect Ratio</label>
        <button
          onClick={() => setIsAspectRatioListOpen(!isAspectRatioListOpen)}
          className="w-full bg-gray-900/50 text-left p-3 rounded-lg flex items-center justify-between hover:bg-gray-800/50 transition-colors"
          disabled={disabled}
        >
          <div>
            <span className="text-gray-300">{selectedAspectRatio?.label}</span>
            <span className="text-sm text-gray-400 ml-2">({selectedAspectRatio?.ratio})</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${isAspectRatioListOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isAspectRatioListOpen && (
          <div className="absolute z-50 mt-2 w-full bg-gray-900 rounded-xl shadow-xl border border-white/10 max-h-64 overflow-y-auto custom-scrollbar">
            {aspectRatios.map((option) => (
              <button
                key={option.ratio}
                onClick={() => {
                  onAspectRatioChange(option.ratio);
                  setIsAspectRatioListOpen(false);
                }}
                className="w-full text-left p-3 hover:bg-gray-800 flex items-center justify-between group"
              >
                <div>
                  <div className="font-medium text-white">
                    {option.label}
                    <span className="text-gray-400 ml-2">({option.ratio})</span>
                  </div>
                  <div className="text-sm text-gray-400">{option.description}</div>
                </div>
                {aspectRatio === option.ratio && (
                  <Check className="w-5 h-5 text-blue-500" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={onGenerate}
        disabled={loading || !prompt || disabled}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Creating Magic...
          </>
        ) : disabled ? (
          <>
            <Lock className="w-5 h-5" />
            Upgrade to Continue
          </>
        ) : (
          <>
            <Wand2 className="w-5 h-5" />
            Generate Masterpiece
          </>
        )}
      </button>
    </div>
  );
};

export default GeneratorForm;