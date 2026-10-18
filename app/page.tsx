import type { Metadata } from "next";

import Navbar from "@/app/components/layout/Navbar";
import Hero from "@/app/components/home/Hero";
import TrustBar from "@/app/components/home/TrustBar";
import Services from "@/app/components/home/Services";
import Reviews from "@/app/components/home/Reviews";
import WhyChoose from "@/app/components/home/WhyChoose";
import About from "./components/home/About";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Plumber in Philadelphia, PA",
  description:
    "Philadelphia Plumbing Services provides fixture installation and repair, plumbing repairs and installations, water heaters, code corrections, water line work, and residential and commercial plumbing."
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Reviews />
        <WhyChoose />
        <About />
      </main>

      <Footer />
    </>
  );
}
