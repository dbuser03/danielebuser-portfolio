import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { neueHaasGroteskDisplay, neueHaasGroteskText } from "../utils/fonts";

export const metadata: Metadata = {
  title: "Daniele Buser",
  description: "Daniele Buser's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${neueHaasGroteskDisplay.variable} ${neueHaasGroteskText.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
