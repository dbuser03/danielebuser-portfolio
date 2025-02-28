"use client";

import { useClickHandler } from "@/hooks/useClickHandler";
import { LandingScreen } from "@/app/landing";
import { Footer, Header } from "@/components/layout";

export default function Home() {
  const { handleClick, cursorStyle } = useClickHandler();

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
