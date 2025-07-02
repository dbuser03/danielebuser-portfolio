"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Home } from "@/components/about";
import { Profile } from "@/components/about";
import { Contacts } from "@/components/about";
import { usePageNumber } from "@/hooks/about/usePageNumber";

import { DEFAULT_CITY, DEFAULT_COORDINATES } from "@/constants/footer/footer";
import ScrollContext from "@/components/context/ScrollContext";
import Cursor from "@/components/cursor/Cursor";

export default function About() {
  const { currentPage, homeRef, profileRef, contactsRef } = usePageNumber();

  return (
    <div className="flex h-screen flex-col">
      <Cursor />
      <Header
        preventNameAnimation={true}
        preventMenuAnimation={false}
        hideMenu={false}
        clickableAuthorInfo={true}
        currentPath="/about"
      />
      <main className="flex-1">
        <ScrollContext>
          <div ref={homeRef}>
            <Home />
          </div>
          <div ref={profileRef}>
            <Profile />
          </div>
          <div ref={contactsRef}>
            <Contacts />
          </div>
        </ScrollContext>
      </main>
      <Footer
        preventCityAnimation={false}
        preventTimeAnimation={false}
        preventCoordinatesAnimation={false}
        preventPageNumberAnimation={false}
        city={DEFAULT_CITY}
        coordinates={DEFAULT_COORDINATES}
        pageNumber={currentPage}
        isLoading={false}
        fadeOut={false}
        time={""}
      />
    </div>
  );
}
