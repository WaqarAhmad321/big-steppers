import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Outfit } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";
import ApoloContextProvider from "@/components/apollo-provider";
import localFont from "next/font/local";

const SpaceGrotesk = Space_Grotesk({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const outfit = Outfit({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const heatersFont = localFont({
  src: "../../public/Heaters.otf",
  display: "swap",
  variable: "--font-space-heatersfont",
});

export const metadata: Metadata = {
  title: "BigSteppers",
  description: "BigSteppers - The best place to buy shoes online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGrotesk.variable} ${outfit.variable} ${heatersFont.variable} antialiased`}>
        {/* <ApoloContextProvider> */}
        <Navbar />

        {children}

        <Footer />
        {/* </ApoloContextProvider> */}
      </body>
    </html>
  );
}
