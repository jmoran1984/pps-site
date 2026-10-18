import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutValues from "../components/about/AboutValues";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Philadelphia Plumbing Services, our commitment to honest workmanship, dependable service, and quality residential and commercial plumbing throughout Philadelphia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutHero />

        <AboutStory />

        <AboutValues />

      </main>

      <Footer />
    </>
  );
}
