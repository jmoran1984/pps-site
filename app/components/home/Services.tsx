import Section from "../ui/Section";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import ServiceCard from "./ServicesCard";
import { services } from "../../../lib/data/services";
import { routes } from "@/lib/routes";

const homepageServiceSlugs = [
  "drain-cleaning",
  "water-heaters",
  "leak-repairs",
  "fixture-repairs",
  "water-service-replacement",
  "commercial-plumbing",
];

const homepageServices = homepageServiceSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

export default function Services() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <Heading
          eyebrow="Plumbing Services"
          title="The Plumbing Work Philadelphia Calls Us For"
          subtitle="Repairs, drain problems, water heaters, water service work, fixture repairs, and commercial plumbing handled by a Philadelphia Master Plumber."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {homepageServices.map((service) => (
            <ServiceCard
              href={routes.services.detail(service.slug)}
              description={service.shortDescription}
              key={service.title}
              {...service}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={routes.services.root} variant="outline">
            View All Plumbing Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
