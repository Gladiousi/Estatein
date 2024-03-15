import "./globals.css";

import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Estate",
  description: "Real Estate Business Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Real Estate Business Website" />
        <meta property="og:title" content="Estate" />
        <meta
          property="og:description"
          content="Real Estate Business Website"
        />
        {/* <meta
          property="og:image"
          content="URL_изображения_вашего_логотипа_или_картинки"
        />
        <meta property="og:url" content="URL_вашего_сайта" /> */}
      </head>

      <body className={inter.className}>
        <main className="overflow-x-hidden h-screen w-screen">
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </main>
      </body>
    </html>
  );
}
