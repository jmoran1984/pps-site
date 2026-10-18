import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import { site } from "../../../lib/config/site";
import { routes } from "@/lib/routes";

export default function Hero() {
  return (
    <section className="bg-white">
      <Container className="grid items-center gap-10 py-8 sm:py-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <span className="inline-flex max-w-full items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold leading-5 text-[#005A9C] sm:px-4 sm:py-2 sm:text-sm">
            Philadelphia Registered Master Plumber • Licensed &amp; Insured
          </span>

          <h1 className="mt-5 max-w-3xl text-[2.65rem] font-bold leading-[1.02] tracking-tight text-[#123B63] sm:mt-7 sm:text-5xl lg:text-6xl xl:text-7xl">
            Philadelphia Plumbing That Gets Done Right.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:mt-7 sm:text-xl sm:leading-9">
            Plumbing repairs, drain cleaning, water heaters, water service work,
            and fixture installations for homes and businesses throughout
            Philadelphia.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
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

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Local service throughout Philadelphia. Call to speak directly with a
            plumbing professional.
          </p>

          <div className="mt-7 grid gap-2.5 text-sm font-medium text-slate-700 sm:mt-8 sm:gap-3 sm:text-base lg:text-lg">
            <div>✓ Philadelphia Registered Master Plumber</div>
            <div>✓ Residential &amp; Commercial Service</div>
            <div>✓ Repairs • Drains • Water Heaters • Installations</div>
          </div>
        </div>

        <div className="relative h-[380px] overflow-hidden rounded-[28px] shadow-xl sm:h-[520px] lg:h-[650px]">
          <Image
            src="/plumbing-images/hero1.webp"
            alt="Licensed plumber servicing a residential plumbing system in Philadelphia"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/35 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
              Local Philadelphia Service
            </p>
            <h2 className="mt-2 text-lg font-bold text-[#123B63] sm:text-xl">
              Registered Master Plumber
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:mt-2 sm:text-base">
              Residential • Commercial • Property Management
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
