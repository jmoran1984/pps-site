"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import { site } from "../../../lib/config/site";
import { routes } from "@/lib/routes";

const links = site.navigation;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="w-[185px] shrink-0 sm:w-[240px] xl:w-[270px]">
          <Logo />
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 xl:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-[#005A9C]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Call Today
            </p>

            <a
              href={site.phoneHref}
              className="whitespace-nowrap font-semibold text-[#123B63] transition-colors hover:text-[#005A9C]"
            >
              {site.phone}
            </a>
          </div>

          <Button href={routes.contact}>Request Service</Button>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call Philadelphia Plumbing Services at ${site.phone}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#005A9C] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#004A81]"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#123B63]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <Container className="py-5">
            <nav className="grid gap-1">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#005A9C]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 grid gap-3 border-t border-slate-200 pt-4 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#005A9C] px-5 font-semibold text-white"
              >
                <Phone size={18} />
                {site.phone}
              </a>

              <a
                href={routes.contact}
                onClick={() => setMenuOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#005A9C] px-5 font-semibold text-[#005A9C]"
              >
                Request Service
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
