import { Metadata } from "next";
import { site } from "@/lib/config/site";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import BackToHome from "@/app/components/ui/BackToHome";
import Container from "@/app/components/ui/Container";

import ContactHero from "@/app/components/contact/ContactHero";
import ContactCards from "@/app/components/contact/ContactCards";

import ContactServiceArea from "@/app/components/contact/ContactServiceArea";
import ContactCTA from "@/app/components/contact/ContactCTA";
import RequestServiceForm from "@/app/components/contact/RequestServiceForm";

export const metadata: Metadata = {
  alternates: { canonical: `${site.url}/contact` },
  title: "Contact Us",
  description:
    "Contact Philadelphia Plumbing Services to schedule residential and commercial plumbing, drain cleaning, water heater services, leak repairs, excavation, and more throughout Philadelphia.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <Container className="pt-5"><BackToHome /></Container>
        <ContactHero />

        <ContactCards />

        <RequestServiceForm />

        <ContactServiceArea />

        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}
