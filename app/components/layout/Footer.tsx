import Image from "next/image";
import Link from "next/link";

import { routes } from "@/lib/routes";
import { site } from "@/lib/config/site";

import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#123B63] to-[#0C2742] text-white">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(255,255,255,.05),
                transparent 65%
              )
            `,
          }}
        />

        <Container>
          <div className="relative py-24 text-center sm:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
              Need A Plumber?
            </p>

            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Professional Plumbing
              <br />
              Starts With One Call.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl sm:leading-9">
              Tell us what&apos;s going on and we&apos;ll help you determine the
              right next step for your plumbing problem.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Button href={site.phoneHref}>Call {site.phone}</Button>

              <Button href={routes.contact} variant="secondary">
                Request Service
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative">
        <div className="h-px bg-white/10" />

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#123B63]" />
      </div>

      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="relative isolate w-full max-w-[420px]">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-10 -inset-y-6 z-0 rounded-full blur-3xl"
                style={{
                  background: `
                    radial-gradient(
                      ellipse at center,
                      rgba(255,255,255,.10) 0%,
                      rgba(255,255,255,.05) 45%,
                      transparent 80%
                    )
                  `,
                }}
              />

              <Image
                src="/images/no_bg_dark_logo_horizontal.png"
                alt={site.name}
                width={420}
                height={120}
                className="relative z-10 block h-auto w-full"
              />
            </div>

            <p className="-mt-5 max-w-md leading-8 text-blue-100">
              Professional residential and commercial plumbing services
              throughout Philadelphia. From routine repairs to complex
              excavation and water service replacement, we&apos;re committed to
              quality workmanship and dependable service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>

            <ul className="mt-6 space-y-4">
              {site.services.map((service) => (
                <li key={service.title}>
                  <Link
                    href={routes.services.detail(service.slug)}
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Company</h3>

            <ul className="mt-6 space-y-4">
              {site.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-blue-100 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="mt-6 space-y-5 text-blue-100">
              <p>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </p>
              <p>{site.address}</p>

              <div className="pt-4">
                <p>Licensed &amp; Insured</p>
                <p>Philadelphia Master Plumber</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-blue-300 md:flex-row">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>

            <p>Serving Philadelphia, Pennsylvania</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
