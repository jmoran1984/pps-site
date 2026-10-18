import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import BackToHome from "@/app/components/ui/BackToHome";
import Container from "@/app/components/ui/Container";
import WhyChoose from "../components/home/WhyChoose";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutFeatures from "../components/about/AboutFeatures";
import AboutValues from "../components/about/AboutValues";
import { Metadata } from "next";
import { site } from "@/lib/config/site";

export const metadata: Metadata = {
  alternates: { canonical: `${site.url}/about` },
  title: "About Us",
  description: "Learn about Philadelphia Plumbing Services, our commitment to honest workmanship, dependable service, and quality residential and commercial plumbing throughout Philadelphia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Container className="pt-5"><BackToHome /></Container>
        <AboutHero />
        <AboutStory />
        <AboutFeatures />
        <AboutValues />
        <WhyChoose />
      </main>
      <Footer />
    </>
  );
}
