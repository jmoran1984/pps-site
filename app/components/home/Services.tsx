import { Building2, Construction, Droplets, Flame, ClipboardCheck } from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import ServiceCard from "./ServicesCard";
import { routes } from "@/lib/routes";

const homepageServices = [
  {
    title: "Plumbing Repairs & Installations",
    description:
      "Leaks, piping, faucets, toilets, shower valves, sinks, disposals, and other fixture repairs and installations.",
    href: `${routes.services.root}#repairs-installations`,
    icon: Construction,
  },
  {
    title: "Water Heaters",
    description:
      "Repair, replacement, and professional installation of traditional and tankless water heaters.",
    href: routes.services.detail("water-heaters"),
    icon: Flame,
  },
  {
    title: "Code Violations Corrected",
    description:
      "Corrections for plumbing code violations, failed inspections, and work that needs to be brought into compliance.",
    href: routes.services.root,
    icon: ClipboardCheck,
  },
  {
    title: "Drain & Water Line Work",
    description:
      "Drain repairs, water service work, underground piping, and line replacement when the job calls for it.",
    href: routes.services.detail("water-services"),
    icon: Droplets,
  },
  {
    title: "Residential & Commercial Plumbing",
    description:
      "Professional plumbing service for homes, businesses, property managers, and commercial spaces.",
    href: routes.services.detail("commercial-plumbing"),
    icon: Building2,
  },
];

export default function Services() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <Heading
          eyebrow="What We Do"
          title="Plumbing Services"
          subtitle="Repairs and installations for homes and businesses across Philadelphia."
        />

        <div className="mt-8 grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homepageServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href={routes.services.root} variant="outline">
            View All Plumbing Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
