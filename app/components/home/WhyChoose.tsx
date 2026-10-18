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
          title="Honest Work. Clear Communication. Quality Plumbing."
          subtitle="Homeowners call us because we keep things straightforward: clear explanations, transparent recommendations, quality workmanship, and fair pricing for the work being done."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-7 transition hover:shadow-lg sm:p-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                <feature.icon size={28} className="text-[#005A9C]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#123B63] sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600 sm:leading-8">
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
