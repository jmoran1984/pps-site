import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { routes } from "@/lib/routes";

const highlights = [
  "Philadelphia Registered Master Plumber",
  "Licensed & Fully Insured",
  "Residential & Commercial Plumbing",
  "Repairs, Service Work & Installations",
];

export default function About() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-xl sm:rounded-[32px]">
            <Image
              src="/plumbing-images/about1.webp"
              alt="Philadelphia plumber discussing plumbing work with a homeowner"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <Heading
              eyebrow="About Philadelphia Plumbing Services"
              title="A Local Plumbing Company Built Around the Work"
              subtitle="Philadelphia Plumbing Services provides service, repair, installation, and larger plumbing work for homeowners, businesses, and property managers throughout the city. The goal is simple: diagnose the problem correctly, explain the options clearly, and do the work properly."
            />

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#005A9C]"
                    size={22}
                  />

                  <span className="text-base leading-7 text-slate-700 sm:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-xl leading-8 text-slate-600">
              We work across Philadelphia on everything from everyday plumbing
              problems to water service, drainage, fixture, and commercial
              plumbing needs.
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
