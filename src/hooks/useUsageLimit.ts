import { useState, useEffect } from 'react';

const USAGE_KEY = 'ai_image_generator_usage';
const USAGE_TIMESTAMP_KEY = 'ai_image_generator_usage_timestamp';
const FREE_LIMIT = 2;

interface UsageData {
  count: number;
  timestamp: number;
}

export const useUsageLimit = (email?: string) => {
  const [usageCount, setUsageCount] = useState(0);
  const [showPremium, setShowPremium] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem(USAGE_KEY);
    const storedTimestamp = localStorage.getItem(USAGE_TIMESTAMP_KEY);
    
    if (storedData && storedTimestamp) {
      const data: UsageData = JSON.parse(storedData);
      const timestamp = parseInt(storedTimestamp);
      
      // Reset usage after 24 hours
      if (Date.now() - timestamp > 24 * 60 * 60 * 1000) {
        localStorage.setItem(USAGE_KEY, JSON.stringify({ count: 0 }));
        localStorage.setItem(USAGE_TIMESTAMP_KEY, Date.now().toString());
        setUsageCount(0);
      } else {
        setUsageCount(data.count);
      }
    }
  }, []);

  const incrementUsage = () => {
    if (email) return true; // Unlimited usage for email users
    
    const newCount = usageCount + 1;
    setUsageCount(newCount);
    
    localStorage.setItem(USAGE_KEY, JSON.stringify({ count: newCount }));
    localStorage.setItem(USAGE_TIMESTAMP_KEY, Date.now().toString());
    
    if (newCount > FREE_LIMIT) {
      setShowPremium(true);
      return false;
    }
    
    return true;
  };

  return {
    canGenerate: email || usageCount < FREE_LIMIT,
    showPremium,
    setShowPremium,
    incrementUsage,
    remainingGenerations: email ? Infinity : Math.max(0, FREE_LIMIT - usageCount)
  };
};