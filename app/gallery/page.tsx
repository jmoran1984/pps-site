import type { Metadata } from "next";
import { site } from "@/lib/config/site";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Container from "@/app/components/ui/Container";
import WorkPhotoGallery, { type WorkPhoto } from "@/app/components/gallery/WorkPhotoGallery";
import { routes } from "@/lib/routes";
import { photosForCategory } from "@/lib/data/workPhotoSets";

export const metadata: Metadata = {
  alternates: { canonical: `${site.url}/gallery` },
  title: "Our Plumbing Work | Photo Gallery",
  description: "Browse photographs of plumbing work, repairs, installations, and projects from Philadelphia Plumbing Services.",
};

// Place additional photos in public/work-photos. Photos in that folder appear
// automatically when the site is built. Keep the original file names.
const extensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const legacyPhotos = [
  "20170608_145024.jpg",
  "20170608_150225.jpg",
  "20220630_115241.jpg",
  "20220630_115250.jpg",
  "20220630_115500.jpg",
  "20220630_160016.jpg",
  "20220630_160051.jpg",
  "20260303_153158.jpg",
  "20260820_102805.jpg",
  "IMG_4014.jpg",
  "VBlcSxI_d.jpg",
];

function collectPhotos(): WorkPhoto[] {
  const root = path.join(process.cwd(), "public");
  const galleryDir = path.join(root, "work-photos");
  const userUploads = fs.existsSync(galleryDir)
    ? fs.readdirSync(galleryDir).filter((file) => extensions.has(path.extname(file).toLowerCase())).sort((a, b) => b.localeCompare(a))
    : [];
  const currentPhotos = legacyPhotos.filter((file) => fs.existsSync(path.join(root, "plumbing-images", file)) && !userUploads.includes(file));

  return [
    ...userUploads.map((file) => ({
      src: `/work-photos/${encodeURIComponent(file)}`,
      alt: "Plumbing project photograph",
      caption: "Plumbing work photograph",
    })),
    ...currentPhotos.map((file) => ({
      src: `/plumbing-images/${encodeURIComponent(file)}`,
      alt: "Plumbing project photograph",
      caption: "Plumbing work photograph",
    })),
  ];
}

export default function GalleryPage() {
  const photos = collectPhotos();
  const fixtures = photosForCategory("fixtures");
  const leaks = photosForCategory("leaks");
  const groupedFiles = new Set([...fixtures, ...leaks].map((photo) => photo.src));
  const otherPhotos = photos.filter((photo) => !groupedFiles.has(photo.src));
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-[#F5FAFE] py-10 sm:py-14">
          <Container>
            <Link
              href={routes.services.root}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0879C7] hover:underline"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Back to Plumbing Services
            </Link>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#0879C7]">Our Work</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#07558C] sm:text-5xl">
              Plumbing Work Gallery
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Photographs from plumbing jobs and installations. Tap an image to see it larger, then browse the rest without leaving the page.
            </p>
          </Container>
        </section>
        <section className="py-10 sm:py-16">
          <Container>
            <p className="mb-10 max-w-3xl text-sm leading-6 text-slate-600">
              These are the photos we've uploaded so far. The categories and ordering are a first pass; we can choose the strongest shots and rearrange them later.
            </p>
            <div id="fixtures" className="scroll-mt-28">
              <h2 className="mb-3 text-3xl font-bold text-[#07558C]">Fixtures <span className="text-base font-medium text-slate-500">({fixtures.length})</span></h2>
              <p className="mb-6 text-slate-600">Initial upload batch — selection and ordering still to come.</p>
              <WorkPhotoGallery photos={fixtures} />
            </div>
            <div id="leaks" className="mt-16 scroll-mt-28">
              <h2 className="mb-3 text-3xl font-bold text-[#07558C]">Leaks &amp; Piping <span className="text-base font-medium text-slate-500">({leaks.length})</span></h2>
              <p className="mb-6 text-slate-600">Initial upload batch — selection and ordering still to come.</p>
              <WorkPhotoGallery photos={leaks} />
            </div>
            <div id="installations" className="mt-16 scroll-mt-28">
              <h2 className="mb-3 text-3xl font-bold text-[#07558C]">New Installations</h2>
              <p className="rounded-2xl border border-slate-200 bg-[#F5FAFE] px-6 py-8 text-slate-600">
                We'll feature selected completed bathrooms and installation projects here when we review the photos.
              </p>
            </div>
            {otherPhotos.length > 0 && (
              <div className="mt-16 border-t border-slate-200 pt-10">
                <h2 className="mb-3 text-3xl font-bold text-[#07558C]">Earlier Project Photos</h2>
                <p className="mb-6 text-slate-600">Additional photos from the original website collection.</p>
                <WorkPhotoGallery photos={otherPhotos} />
              </div>
            )}
            <div className="mt-10 flex flex-wrap gap-5 text-sm">
              <Link href={routes.services.root} className="font-semibold text-[#0879C7] hover:underline">Browse Plumbing Services</Link>
              <Link href={routes.contact} className="font-semibold text-[#0879C7] hover:underline">Request Plumbing Service</Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
