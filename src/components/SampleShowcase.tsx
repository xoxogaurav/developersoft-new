import React from 'react';
import { Lightbulb, MousePointerClick } from 'lucide-react';

interface SampleShowcaseProps {
  onSelectSample: (prompt: string, style: string) => void;
}

const samples = [
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/992.png",
    prompt: "Magical floating islands in the sky with waterfalls, crystal formations, and ancient ruins",
    style: "Digital Art"
  },
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/991.png",
    prompt: "A cyberpunk street market at night with neon signs, holographic advertisements, and flying vehicles",
    style: "Cyberpunk"
  },
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/990.png",
    prompt: "An enchanted forest with bioluminescent plants, mystical creatures, and a path leading to a glowing portal",
    style: "Fantasy"
  }
];

const SampleShowcase: React.FC<SampleShowcaseProps> = ({ onSelectSample }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 justify-center mb-6">
        <Lightbulb className="w-6 h-6 text-yellow-400" />
        <h2 className="text-2xl font-bold text-white">Inspiration Gallery</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {samples.map((sample, index) => (
          <div
            key={index}
            onClick={() => onSelectSample(sample.prompt, sample.style)}
            className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 transform hover:scale-[1.02] transition-all cursor-pointer group"
          >
            <div className="aspect-square relative">
              <img
                src={sample.imageUrl}
                alt={`Sample ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                <MousePointerClick className="w-5 h-5" />
                <span className="font-medium">Try this prompt</span>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                  {sample.style}
                </span>
              </div>
              <p className="text-sm text-gray-300 line-clamp-2">
                <span className="font-medium text-blue-400">Prompt:</span> {sample.prompt}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          Click any sample to try its prompt. Your imagination is the only limit!
        </p>
      </div>
    </div>
  );
};

export default SampleShowcase;