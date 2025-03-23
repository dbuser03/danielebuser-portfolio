"use client";

import Footer from "@/components/footer/Footer";
import { Header } from "@/components/header";
import { LOADING_PAGE_NUMBER } from "@/constants/footer/footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLoadingProgress } from "@/hooks/UseLoadingProgress";

export default function Loader() {
  const router = useRouter();
  const progress = useLoadingProgress({ isLoading: true });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setFadeOut(true);

      const redirectTimer = setTimeout(() => {
        router.push("/home");
      }, 300);

      return () => clearTimeout(redirectTimer);
    }
  }, [progress, router]);

  return (
    <div className="h-screen w-full">
      <div className="flex h-full w-full items-center justify-center">
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
    </div>
  );
}
