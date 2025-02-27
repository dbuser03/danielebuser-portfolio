"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/layout/store";
import { LandingScreen } from "@/app/landing";
import { Footer, Header } from "@/components/layout";

export default function Home() {
  const loaded = useStore((state) => state.loaded);
  const setLoaded = useStore((state) => state.setLoaded);
  const [readyForClick, setReadyForClick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReadyForClick(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loaded) {
      setReadyForClick(false);
    }
  }, [loaded]);

  const handleClick = () => {
    if (readyForClick && !loaded) {
      setLoaded(true);
      setReadyForClick(false);
    }
  };

  const cursorStyle = readyForClick && !loaded ? "pointer" : "default";

  return (
    <div
      className="flex min-h-screen flex-col overflow-hidden"
      onClick={handleClick}
      style={{ cursor: cursorStyle }}
    >
      <Header />
      <LandingScreen />
      <Footer />
    </div>
  );
}
