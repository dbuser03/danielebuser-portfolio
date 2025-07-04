import { useState, useEffect } from 'react';
import { LoadingProgressOptions } from '@/types/footer/footer';

export const useLoadingProgress = ({ 
  duration = 1500, 
  isLoading 
}: LoadingProgressOptions) => {
  const [progress, setProgress] = useState(1);
  
  useEffect(() => {
    if (isLoading) {
      setProgress(1);
      
      const startTime = Date.now();
      
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
        
        setProgress(progress);
        
        if (progress < 100) {
          requestAnimationFrame(updateProgress);
        }
      };
      
      requestAnimationFrame(updateProgress);
    }
  }, [isLoading, duration]);
  
  return progress;
};