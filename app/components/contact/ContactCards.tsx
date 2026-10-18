import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "../ui/Container";

import { site } from "@/lib/config/site";

const cards = [
  {
    icon: Phone,
    title: "Call Us",
    value: site.phone,
    description:
      "Speak directly with our team about your plumbing needs.",
  },
  {
    icon: Mail,
    title: "Email",
    value: site.email,
    description:
      "Send us a message and we'll respond as soon as possible.",
  },
  {
    icon: MapPin,
    title: "Service Area",
    value: site.address,
    description:
      "Serving residential and commercial customers throughout Philadelphia.",
  },
];

export default function ContactCards() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-6 inline-flex rounded-2xl bg-[#005A9C]/10 p-4">
                  <Icon className="h-8 w-8 text-[#005A9C]" />
                </div>

                <h3 className="text-xl font-semibold text-[#123B63]">
                  {card.title}
                </h3>

                <p className="mt-4 font-medium text-slate-800" data-pps-phone-display={card.title === "Call Us" ? "" : undefined}>
                  {card.value}
                </p>

                <p className="mt-4 text-slate-600">
                  {card.description}
                </p>

              </div>
            );
          })}

        </div>
      </Container>
    </section>
  );
}