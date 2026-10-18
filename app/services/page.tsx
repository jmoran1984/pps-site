import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import Container from "../components/ui/Container";
import BackToHome from "../components/ui/BackToHome";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import RepairsGallery from "../components/services/RepairsGallery";
import Section from "../components/ui/Section";

import { services } from "@/lib/data/services";

const servicePriority = [
  "water-heaters",
  "water-services",
  "commercial-plumbing",
  "drain-cleaning",
  "sump-pumps",
  "water-filtration",
  "new-construction-rough-ins",
  "sewer-water-excavation",
];

const orderedServices = servicePriority
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));
import { routes } from "@/lib/routes";
import { site } from "@/lib/config/site";
import Navbar from "../components/layout/Navbar";
import type { Metadata } from "next";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description:
    "Plumbing service in Philadelphia focused on fixture installation and repair, plumbing repairs and installations, water heaters, code corrections, water line work, and residential and commercial plumbing.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      {/* Hero */}

      <Section className="relative overflow-hidden bg-slate-50">
        <Container>
          <div className="mb-6"><BackToHome /></div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#005A9C]">
              Philadelphia Plumbing Services
            </p>

            <h1 className="mt-6 text-5xl font-bold text-[#123B63] lg:text-6xl">
              Plumbing Service, Repairs & Installations
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              From fixture installations and everyday plumbing repairs to water heaters,
              code corrections, water line work, and commercial service, we focus
              on the plumbing work homes and businesses need most.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button href="/contact#request-service">Request Service</Button>

              <Button href={site.phoneHref} variant="secondary">
                {site.phone}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services */}

      <Section>
        <Container>
          <div id="repairs-installations" className="scroll-mt-28">
          <Heading
            eyebrow="Our Services"
            title="Repairs & Installations"
            subtitle="Choose the type of work you need. Tap a photo to see common repairs and installations without leaving this page."
          />

          <RepairsGallery />
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-[#F5FAFE] px-5 py-5"><p className="max-w-xl text-sm leading-6 text-slate-600">See more photographs of actual plumbing projects in our dedicated work gallery.</p><Link href={routes.gallery} className="inline-flex min-h-11 items-center gap-2 font-semibold text-[#0879C7] hover:underline"><Camera size={19} aria-hidden="true" />View Work Photos<ArrowRight size={17} aria-hidden="true" /></Link></div>
          </div>

          <div id="specialty-services" className="mt-16 scroll-mt-28 border-t border-slate-200 pt-12">
            <Heading eyebrow="Specialty Services" title="Specialty Plumbing Work" subtitle="Additional services for water heaters, water lines, drains, and larger projects." />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {orderedServices.map((service) => (
              <Link
                key={service.slug}
                href={routes.services.detail(service.slug)}
                className="group"
              >
                <article className="rounded-[32px] border border-slate-200 bg-white p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#005A9C] hover:shadow-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-[#123B63] transition-colors group-hover:text-[#005A9C]">
                        {service.title}
                      </h2>

                      <p className="mt-5 leading-8 text-slate-600">
                        {service.shortDescription}
                      </p>
                    </div>

                    <ArrowRight
                      size={28}
                      className="text-[#005A9C] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                  <div className="mt-10">
                    <span className="font-semibold text-[#005A9C]">
                      Learn More
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
