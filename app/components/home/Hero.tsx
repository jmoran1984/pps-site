import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import { site } from "../../../lib/config/site";
import { routes } from "@/lib/routes";

export default function Hero() {
  return (
    <section className="bg-white">
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#005A9C]">
            Philadelphia Master Plumber • Licensed &amp; Insured
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-[#123B63] sm:text-5xl lg:text-6xl xl:text-7xl">
            Philadelphia Plumbing That Gets Done Right.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            Plumbing repairs, drain cleaning, water heaters, water service work,
            and fixture installations for homes and businesses throughout
            Philadelphia.
          </p>

          <div className="mt-8 grid gap-3 text-base font-medium text-slate-700 sm:text-lg">
            <div>✓ Philadelphia Master Plumber</div>
            <div>✓ Residential &amp; Commercial Service</div>
            <div>✓ Repairs • Drains • Water Heaters • Installations</div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={site.phoneHref}
              className="min-h-12 px-7 text-base sm:min-w-[210px]"
            >
              Call Now: {site.phone}
            </Button>

            <Button
              href={routes.contact}
              variant="outline"
              className="min-h-12 px-7 text-base sm:min-w-[170px]"
            >
              Request Service
            </Button>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Local service throughout Philadelphia. Call to speak directly with a
            plumbing professional.
          </p>
        </div>

        <div className="relative h-[430px] overflow-hidden rounded-[28px] shadow-xl sm:h-[560px] lg:h-[650px]">
          <Image
            src="/plumbing-images/hero1.webp"
            alt="Licensed plumber servicing a residential plumbing system in Philadelphia"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/35 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Local Philadelphia Service
            </p>
            <h2 className="mt-2 text-xl font-bold text-[#123B63]">
              Licensed Master Plumber
            </h2>
            <p className="mt-2 text-slate-600">
              Residential • Commercial • Property Management
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
