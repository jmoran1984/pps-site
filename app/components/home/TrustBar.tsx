import Container from "../ui/Container";
import { ShieldCheck, BadgeCheck, Building2, MapPin } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Philadelphia",
    subtitle: "Master Plumber",
  },
  {
    icon: BadgeCheck,
    title: "Licensed",
    subtitle: "& Insured",
  },
  {
    icon: Building2,
    title: "Residential",
    subtitle: "& Commercial",
  },
  {
    icon: MapPin,
    title: "Local",
    subtitle: "Philadelphia Service",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-[#F8FAFC]">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 py-8 sm:py-10 lg:grid-cols-4 lg:gap-y-0">
          {items.map((item) => (
            <div
              key={`${item.title}-${item.subtitle}`}
              className="flex flex-col items-center justify-center px-3 text-center sm:px-6 lg:border-r lg:border-slate-200 lg:last:border-r-0"
            >
              <item.icon
                className="mb-3 text-[#005A9C] sm:mb-4"
                size={30}
                strokeWidth={1.7}
              />

              <p className="text-base font-semibold text-[#123B63] sm:text-lg">
                {item.title}
              </p>

              <p className="mt-1 text-sm text-slate-500 sm:text-base">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
