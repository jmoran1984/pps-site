import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Container from "@/app/components/ui/Container";
import WorkPhotoGallery, { type WorkPhoto } from "@/app/components/gallery/WorkPhotoGallery";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
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
  const currentPhotos = legacyPhotos.filter((file) => fs.existsSync(path.join(root, "plumbing-images", file)));

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
            <WorkPhotoGallery photos={photos} />
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
