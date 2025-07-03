"use client";

import { LOADING_PAGE_NUMBER } from "@/constants/footer/footer";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLoaderLogic } from "@/hooks/loader/useLoaderLogic";
import { Columns } from "@/components/columns";

export default function Loader() {
  const { fadeOut } = useLoaderLogic();

  return (
    <div className="flex h-screen w-screen">
      <Columns maxColumns={12} alternative={false} />
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
