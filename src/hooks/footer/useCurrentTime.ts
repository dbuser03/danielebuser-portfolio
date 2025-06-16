import { useState, useEffect } from "react";

export const useCurrentTime = (): string => {
  const [time, setTime] = useState<string>(getCurrentTimeFormatted());
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTimeFormatted());
    }, 60000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return time;
};

function getCurrentTimeFormatted(): string {
  const now = new Date();
  return now.toLocaleTimeString("en-US", { 
    hour: "numeric", 
    minute: "2-digit",
    hour12: true 
  });
}