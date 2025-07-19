import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
export const metadata: Metadata = {
  title: "VetBot",
};

export default function Home() {
  return (
    <main>
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
    >
      <Header />
      <Hero />
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Footer />
          <ScrollToTop />
        </ThemeProvider>
    </main>
  );
}
