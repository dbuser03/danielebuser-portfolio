import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import {
  NEUE_HAAS_GROTESK_DISPLAY_PRO,
  NEUE_HAAS_GROTESK_TEXT_PRO,
} from "@/constants/fonts";

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
        className={`${NEUE_HAAS_GROTESK_DISPLAY_PRO.variable} ${NEUE_HAAS_GROTESK_TEXT_PRO.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
