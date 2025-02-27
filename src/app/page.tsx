import { LandingScreen } from "@/app/landing";
import { Header } from "@/components/layout";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <LandingScreen />
    </div>
  );
}
