import { useState, useEffect } from "react";
import { UseTimezoneOptions, UseTimezoneOptionsSchema } from "@/types/layout/timezoneTypes";

export function useTimezone(options: Partial<UseTimezoneOptions> = {}) {
  const { timezone, updateInterval, format } = UseTimezoneOptionsSchema.parse(options);
  const [formattedTime, setFormattedTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        ...format,
        timeZone: timezone,
      });
      setFormattedTime(formatter.format(now));
    };

    updateTime();

    const interval = setInterval(updateTime, updateInterval);

    return () => clearInterval(interval);
  }, [timezone, updateInterval, format]);

  return formattedTime;
}