"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Home } from "@/components/about";
import { Profile } from "@/components/about";

import {
  DEFAULT_CITY,
  DEFAULT_COORDINATES,
  DEFAULT_PAGE_NUMBER,
} from "@/constants/footer/footer";

export default function About() {
  return (
    <div className="flex h-screen flex-col">
      <Header
        preventNameAnimation={true}
        preventMenuAnimation={false}
        hideMenu={false}
        clickableAuthorInfo={true}
        currentPath="/about"
      />
      <main className="flex-1">
        <Home />
        <Profile />
      </main>
      <Footer
        preventCityAnimation={false}
        preventTimeAnimation={false}
        preventCoordinatesAnimation={false}
        preventPageNumberAnimation={false}
        city={DEFAULT_CITY}
        time={""}
        coordinates={DEFAULT_COORDINATES}
        pageNumber={DEFAULT_PAGE_NUMBER}
        isLoading={false}
        fadeOut={false}
      />
    </div>
  );
}
