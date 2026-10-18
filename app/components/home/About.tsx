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
              subtitle="Philadelphia Plumbing Services serves homeowners, businesses, and property managers across the city with practical plumbing repairs and installations."
            />

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              Led by a Philadelphia Registered Master Plumber. Licensed and insured for residential and commercial work.
            </p>

            <div className="mt-10">
              <Button href={routes.about}>About Our Company</Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
