import { useState, useEffect, useMemo, useCallback } from "react";
import { UseTimezoneOptions, UseTimezoneOptionsSchema } from "@/types/layout/timezoneTypes";
import { DEFAULT_LOCALE } from "@/constants/footer";

export function useTimezone(options: Partial<UseTimezoneOptions> = {}) {
  const { timezone, updateInterval, format } = UseTimezoneOptionsSchema.parse(options);

  const formatter = useMemo(() => {
    try {
      return new Intl.DateTimeFormat(DEFAULT_LOCALE, {
        ...format,
        timeZone: timezone,
      });
    } catch (error) {
      console.error(`Errore nella creazione del formatter per il timezone '${timezone}':`, error);
      return new Intl.DateTimeFormat(DEFAULT_LOCALE, format);
    }
  }, [timezone, format]);

  const [formattedTime, setFormattedTime] = useState<string>(() => {
    try {
      return formatter.format(new Date());
    } catch {
      return "";
    }
  });

  const updateTime = useCallback(() => {
    try {
      const now = new Date();
      setFormattedTime(formatter.format(now));
    } catch (error) {
      console.error("Errore nell'aggiornamento dell'orario:", error);
    }
  }, [formatter]);

  useEffect(() => {
    updateTime();

    const interval = setInterval(updateTime, updateInterval);

    return () => clearInterval(interval);
  }, [updateTime, updateInterval]);

  return formattedTime;
}