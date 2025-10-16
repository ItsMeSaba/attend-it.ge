import Header from "@/components/layout/Header";

import { MapProvider } from "@/contexts/MapContext";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Attend It!",
  description: "Find and Attend the best conferences in Georgia!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-[#191A33] flex flex-col`}>
        <MapProvider>
          <Suspense>
            <Header />
            {children}
          </Suspense>
        </MapProvider>
      </body>
    </html>
  );
}
