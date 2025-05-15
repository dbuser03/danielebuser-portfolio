"use client";

import { Columns } from "@/components/columns";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import {
  DEFAULT_CITY,
  DEFAULT_COORDINATES,
  DEFAULT_PAGE_NUMBER,
} from "@/constants/footer/footer";

export default function About() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Columns maxColumns={12} />
      <Header
        preventNameAnimation={true}
        preventMenuAnimation={false}
        hideMenu={false}
        clickableAuthorInfo={true}
        currentPath="/about"
      />
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
