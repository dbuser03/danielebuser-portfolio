"use client";

import { LOADING_PAGE_NUMBER } from "@/constants/footer/footer";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLoaderLogic } from "@/hooks/loader/useLoaderLogic";
import ColumnGrid from "@/components/ColumnGrid";

export default function Loader() {
  const { fadeOut } = useLoaderLogic();

  return (
    <div className="flex h-full w-full items-center justify-center">
      <ColumnGrid showBorder={false} opacity={1} className={""} />
      <Header
        preventNameAnimation={false}
        preventMenuAnimation={true}
        hideMenu={true}
        clickableAuthorInfo={false}
      />
      <Footer
        preventCityAnimation={true}
        preventCoordinatesAnimation={true}
        preventPageNumberAnimation={true}
        preventTimeAnimation={true}
        city={""}
        time={""}
        coordinates={""}
        pageNumber={LOADING_PAGE_NUMBER}
        isLoading={true}
        fadeOut={fadeOut}
      />
    </div>
  );
}
