import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLoadingProgress } from "@/hooks/footer/UseLoadingProgress";

export function useLoaderLogic() {
  const router = useRouter();
  const progress = useLoadingProgress({ isLoading: true, duration: 1500 });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    router.prefetch("/home");
  }, [router]);

  useEffect(() => {
    if (progress === 100) {
      setFadeOut(true);

      const redirectTimer = setTimeout(() => {
        router.push("/home");
      }, 300);

      return () => clearTimeout(redirectTimer);
    }
  }, [progress, router]);

  return {
    progress,
    fadeOut,
  };
}