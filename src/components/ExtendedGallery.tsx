import React from 'react';
import { Palette, Lightbulb, MousePointerClick } from 'lucide-react';

interface GalleryItem {
  imageUrl: string;
  prompt: string;
  style: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  // Logos & Branding
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100001.png",
    prompt: "Minimalist abstract logo for a tech startup, incorporating a geometric fox head design with clean lines",
    style: "Minimalist",
    category: "Logo Design"
  },
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100002.png",
    prompt: "Modern coffee shop logo with a steaming cup and organic shapes, earthy tones",
    style: "Digital Art",
    category: "Logo Design"
  },
  
  // Website Design
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100003.png",
    prompt: "landing page for a travel website showing a surreal landscape with floating islands and hot air balloons",
    style: "Digital Art",
    category: "Website Design"
  },
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100004.png",
    prompt: "Futuristic tech company landing page background with glowing circuit patterns and abstract data visualization",
    style: "Cyberpunk",
    category: "Website Design"
  },
  
  // Special Occasions
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100005.png",
    prompt: "Magical birthday card design with a whimsical castle, floating balloons, and sparkling fireworks in the night sky",
    style: "Fantasy",
    category: "Special Occasions"
  },
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100006.png",
    prompt: "Wedding invitation background with elegant floral arrangements, soft pastel colors, and romantic lighting",
    style: "Watercolor",
    category: "Special Occasions"
  },
  
  // Social Media
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100007.png",
    prompt: "Instagram story template with a modern Memphis style pattern, bold colors, and geometric shapes",
    style: "Pop Art",
    category: "Social Media"
  },
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100008.png",
    prompt: "YouTube thumbnail background featuring a dramatic sci-fi laboratory scene with glowing experiments",
    style: "Cyberpunk",
    category: "Social Media"
  },
  
  // Product Visualization
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100009.png",
    prompt: "Luxury perfume bottle in an enchanted garden with floating flower petals and magical light beams",
    style: "Photorealistic",
    category: "Product Visualization"
  },
  {
    imageUrl: "https://d2b2zzeod3vf0q.cloudfront.net/sample/100010.png",
    prompt: "Futuristic sneaker design floating in zero gravity with dynamic energy trails and holographic elements",
    style: "Digital Art",
    category: "Product Visualization"
  }
];

interface ExtendedGalleryProps {
  onSelectSample: (prompt: string, style: string) => void;
}

const ExtendedGallery: React.FC<ExtendedGalleryProps> = ({ onSelectSample }) => {
  const categories = Array.from(new Set(galleryItems.map(item => item.category)));

  return (
    <div className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20 pointer-events-none" />
      
      <div className="relative">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Endless Possibilities</h2>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our curated collection of AI-generated designs across different categories.
            Click any design to try the prompt yourself!
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {galleryItems
                  .filter(item => item.category === category)
                  .map((item, index) => (
                    <div
                      key={index}
                      onClick={() => onSelectSample(item.prompt, item.style)}
                      className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 transform hover:scale-[1.02] transition-all cursor-pointer group"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={item.imageUrl}
                          alt={`${category} example ${index + 1}`}
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
                            {item.style}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300 line-clamp-2">
                          <span className="font-medium text-blue-400">Prompt:</span> {item.prompt}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtendedGallery;