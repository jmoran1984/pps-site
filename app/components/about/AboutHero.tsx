import Container from "../ui/Container";
import Button from "../ui/Button";
import BackToHome from "../ui/BackToHome";

import { site } from "@/lib/config/site";

export default function AboutHero() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>
        <div className="mb-6"><BackToHome /></div>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[#005A9C]">
            ABOUT {site.name.toUpperCase()}
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-[#123B63] lg:text-6xl">
            Professional Plumbing Solutions Built on Quality Workmanship
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">
            Philadelphia Plumbing Services provides dependable residential and
            commercial plumbing throughout Philadelphia. We believe in honest
            recommendations, quality workmanship, and treating every customer
            with respect.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact">Request Service</Button>

            <Button href={site.phoneHref} variant="secondary">
              {site.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
