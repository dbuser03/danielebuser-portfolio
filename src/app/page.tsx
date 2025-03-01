"use client";

import { useClickHandler } from "@/hooks/useClickHandler";
import { LandingScreen } from "@/app/landing";
import { Footer, Header } from "@/components/layout";

export default function Home() {
  const { handleClick, readyForClick, hideLabel } = useClickHandler();

  return (
    <div
      className="flex min-h-screen flex-col overflow-hidden"
      onClick={handleClick}
    >
      <Header />
      <LandingScreen readyForClick={readyForClick} hideLabel={hideLabel} />
      <Footer />
    </div>
  );
}
