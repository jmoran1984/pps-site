import Image from "next/image";
import Link from "next/link";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { Service } from "@/lib/types/service";
import { site } from "@/lib/config/site";
import { ShieldCheck, Wrench, Building2, MapPin, Phone } from "lucide-react";

interface Props {
  service: Service;
}

export default function ServiceHero({ service }: Props) {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#005A9C]/5 blur-3xl" />
      <Container>
        <nav
          className="relative z-10 mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#005A9C]">
            Home
          </Link>

          <span aria-hidden="true">/</span>

          <Link
            href="/services"
            className="transition-colors hover:text-[#005A9C]"
          >
            Services
          </Link>

          <span aria-hidden="true">/</span>

          <span className="font-medium text-[#123B63]" aria-current="page">
            {service.title}
          </span>
        </nav>
        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#005A9C]">
              {site.name}
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-extrabold tracking-tight text-[#123B63] lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-8 text-xl max-w-xl leading-9 text-slate-600">
              {service.heroDescription}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="/contact#request-service" variant="primary">
                Request Service
              </Button>

              <Button href={site.phoneHref} variant="secondary">
                <Phone size={10} className="mr-2" />
                {site.phone}
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full bg-[#005A9C]/10 px-4 py-2 text-sm font-semibold text-[#005A9C]">
                <ShieldCheck size={16} />
                Licensed & Insured
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#005A9C]/10 px-4 py-2 text-sm font-semibold text-[#005A9C]">
                <Wrench size={16} />
                Master Plumber
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#005A9C]/10 px-4 py-2 text-sm font-semibold text-[#005A9C]">
                <Building2 size={16} />
                Residential & Commercial
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#005A9C]/10 px-4 py-2 text-sm font-semibold text-[#005A9C]">
                <MapPin size={16} />
                Serving Philadelphia
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-6 -right-6 h-64 w-64 rounded-full border border-[#005A9C]/10" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-slate-200 bg-slate-200 shadow-xl">
              <Image
                src={service.image}
                alt={service.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B63]/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
