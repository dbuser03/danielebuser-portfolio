"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Contacts } from "@/components/about";

import {
  DEFAULT_CITY,
  DEFAULT_COORDINATES,
} from "@/constants/footer/footer";

export default function Contact() {
  return (
    <div className="flex h-screen flex-col">
      <Header
        preventNameAnimation={true}
        preventMenuAnimation={true}
        hideMenu={false}
        clickableAuthorInfo={true}
        currentPath="/contacts"
      />
      <main className="flex-1">
        <Contacts />
      </main>
      <Footer
        preventCityAnimation={true}
        preventTimeAnimation={true}
        preventCoordinatesAnimation={true}
        preventPageNumberAnimation={true}
        city={DEFAULT_CITY}
        time={""}
        coordinates={DEFAULT_COORDINATES}
        pageNumber={"005"}
        isLoading={false}
        fadeOut={false}
      />
    </div>
  );
}
