import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";
import { features } from "../../../lib/data/features";

export default function WhyChoose() {
  return (
    <Section>
      <Container>
        <Heading
          eyebrow="Why Homeowners Call Us"
          title="Straightforward Service, From Start to Finish"
          subtitle="Homeowners call us because we keep things straightforward: transparent troubleshooting and diagnosis, clear recommendations and planning, quality workmanship, fair pricing, and consistent professionalism."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:shadow-md sm:p-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                <feature.icon size={28} className="text-[#005A9C]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#123B63] sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
