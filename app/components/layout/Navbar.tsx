"use client";

import { useState } from "react";
import Link from "next/link";
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
      <Container className="flex h-16 min-w-0 items-center justify-between gap-2 px-3 sm:h-20 sm:gap-4 sm:px-6 lg:px-12">
        <div className="min-w-0 shrink sm:shrink-0">
          <Logo />
        </div>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 xl:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="whitespace-nowrap transition-colors hover:text-[#0879C7]">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-slate-500">Call Today</p>
            <a href={site.phoneHref} className="whitespace-nowrap font-semibold text-[#07558C] hover:text-[#0879C7]">{site.phone}</a>
          </div>
          <Button href={routes.contact}>Request Service</Button>
        </div>
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call Philadelphia Plumbing Services at ${site.phone}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0879C7] text-white transition-colors hover:bg-[#0768A9] sm:w-auto sm:gap-2 sm:px-4"
          >
            <Phone size={18} aria-hidden="true" />
            <span className="hidden text-sm font-semibold sm:inline">Call Now</span>
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-site-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#07558C]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>
      {menuOpen && (
        <div id="mobile-site-nav" className="border-t border-slate-200 bg-white xl:hidden">
          <Container className="py-4">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0879C7]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3 border-t border-slate-200 pt-4 sm:grid-cols-2">
              <a href={site.phoneHref} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0879C7] px-5 font-semibold text-white"><Phone size={18} />{site.phone}</a>
              <Link href={routes.contact} onClick={() => setMenuOpen(false)} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0879C7] px-5 font-semibold text-[#0879C7]">Request Service</Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
