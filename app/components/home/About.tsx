import Image from "next/image";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { routes } from "@/lib/routes";

export default function About() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-xl sm:rounded-[32px]">
            <Image
              src="/plumbing-images/about1.webp"
              alt="Philadelphia plumber discussing plumbing service with a homeowner"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <Heading
              eyebrow="About Philadelphia Plumbing Services"
              title="Local Plumbing, Done Right"
              subtitle="Philadelphia is home, and we’ve spent years working on its plumbing—from older rowhomes and aging systems to renovations and new installations. We take pride in caring for the homes and buildings in our city, and in doing the work right."
            />

            <div className="mt-8">
              <Button href={routes.about}>About Our Company</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
