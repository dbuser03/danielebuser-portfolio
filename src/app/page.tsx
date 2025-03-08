"use client";

import { LandingScreen } from "@/app/landing";
import { Footer, Header } from "@/components/layout";
import { useHomePageLogic } from "@/hooks/useHomePageLogic";

export default function Home() {
  const { handleClick, readyForClick, hideLabel, loaded } = useHomePageLogic();

  return (
    <div
      className="flex min-h-screen flex-col overflow-hidden"
      onClick={handleClick}
    >
      <Header loaded={loaded} />
      <LandingScreen readyForClick={readyForClick} hideLabel={hideLabel} />
      <Footer loaded={loaded} />
    </div>
  );
}
