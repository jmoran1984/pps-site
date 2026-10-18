import { Star } from "lucide-react";

import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const reviews = [
  {
    name: "Sara Appleby",
    source: "Google Review",
    text:
      "Julio is responsive, easy to communicate with, and arrives on time. He's very knowledgeable and takes the time to explain things when I ask questions. The prices are reasonable, and he always leaves the workspace clean.",
  },
  {
    name: "Hao C.",
    source: "Yelp Review",
    text:
      "I really appreciate his transparency and good scoping — he was responsive and willing to provide a quote range upfront. He was also great with scheduling and communication, super on time, knowledgeable, and approachable.",
  },
  {
    name: "Jennifer Johnson",
    source: "Google Review",
    text:
      "Julio is reliable, knowledgeable, and does great work. He replies promptly, and gets the job done quickly. Our neighbors recommended him to us, and we recommend him to everyone!",
  },
];

export default function Reviews() {
  return (
    <Section className="bg-[#F8FAFC]">
      <Container>
        <Heading
          eyebrow="Customer Reviews"
          title="Recommended by the People We Work For"
          subtitle="Real feedback from customers who called us for plumbing repairs, installations, and ongoing service throughout Philadelphia."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
            >
              <div
                className="flex gap-1 text-amber-500"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    strokeWidth={1.8}
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote className="mt-6 flex-grow text-lg leading-8 text-slate-700">
                “{review.text}”
              </blockquote>

              <footer className="mt-8 border-t border-slate-200 pt-5">
                <p className="font-semibold text-[#123B63]">{review.name}</p>
                <p className="mt-1 text-sm text-slate-500">{review.source}</p>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
