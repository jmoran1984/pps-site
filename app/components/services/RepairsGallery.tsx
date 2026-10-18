"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Check, Phone } from "lucide-react";

import Button from "@/app/components/ui/Button";
import { site } from "@/lib/config/site";
import { routes } from "@/lib/routes";

const repairs = [
  {
    id: "fixtures",
    title: "Fixtures & Fittings",
    summary: "Faucets, toilets, sinks, disposals, shower valves, and other everyday plumbing fixtures.",
    image: "/plumbing-images/fixture1.webp",
    imageAlt: "Plumber working on a sink drain connection",
    detail:
      "From a dripping faucet to a fixture that needs replacing, we'll check the problem and explain whether repair or replacement makes more sense.",
    examples: ["Faucets, sinks & disposals", "Toilets & flush components", "Shower valves & trim"],
  },
  {
    id: "leaks",
    title: "Leaks & Piping",
    summary: "Leaking connections, damaged pipes, supply lines, and other water-related repairs.",
    image: "/plumbing-images/leak1.webp",
    imageAlt: "Water spraying from a leaking copper pipe",
    detail:
      "We work to find the source of the leak, assess the surrounding piping, and recommend an appropriate repair or replacement.",
    examples: ["Pipe & fitting repairs", "Water supply lines", "Troubleshooting visible and suspected leaks"],
  },
  {
    id: "installations",
    title: "New Installations & Upgrades",
    summary: "Replacement piping, fixture installations, and plumbing for remodeling or improvement projects.",
    image: "/plumbing-images/roughconstruction1.webp",
    imageAlt: "Water and drain piping installed during construction",
    detail:
      "Whether you're changing fixtures, updating worn piping, or planning a renovation, we can discuss the layout, materials, and scope of the work.",
    examples: ["Fixture replacements & upgrades", "New or replacement piping", "Kitchen & bathroom plumbing projects"],
  },
] as const;

export default function RepairsGallery() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mt-8 grid items-start gap-5 md:grid-cols-3">
      {repairs.map((repair) => {
        const isOpen = openId === repair.id;
        const panelId = `repair-details-${repair.id}`;

        return (
          <article
            key={repair.id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : repair.id)}
              className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0879C7]"
            >
              <div
                className={`relative overflow-hidden bg-slate-100 transition-all duration-300 motion-reduce:transition-none ${
                  isOpen ? "aspect-[4/3]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={repair.image}
                  alt={repair.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-[#07558C]">{repair.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{repair.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0879C7]">
                  {isOpen ? "Show less" : "See what’s included"}
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </div>
            </button>
            {isOpen && (
              <div id={panelId} className="border-t border-slate-200 bg-[#F5FAFE] px-5 py-5 sm:px-6">
                <p className="leading-7 text-slate-700">{repair.detail}</p>
                <ul className="mt-4 space-y-2">
                  {repair.examples.map((example) => (
                    <li key={example} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                      <Check size={17} className="mt-1 shrink-0 text-[#0879C7]" aria-hidden="true" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href={site.phoneHref} className="min-h-11 gap-2 px-4">
                    <Phone size={16} aria-hidden="true" /> Call Us
                  </Button>
                  <Button href={routes.contact} variant="outline" className="min-h-11 px-4">
                    Request Service
                  </Button>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
