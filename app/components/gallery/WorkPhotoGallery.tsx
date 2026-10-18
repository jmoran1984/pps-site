"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";

export type WorkPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export default function WorkPhotoGallery({ photos }: { photos: WorkPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const closeButton = useRef<HTMLButtonElement | null>(null);
  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((current) => current === null ? null : (current + 1) % photos.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      opener.current?.focus();
    };
  }, [isOpen, photos.length]);

  const openPhoto = (index: number, button: HTMLButtonElement) => {
    opener.current = button;
    setActive(index);
  };

  if (photos.length === 0) {
    return (
      <p className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-600">
        Our project gallery is being assembled. Check back for photos of our work.
      </p>
    );
  }

  const selectedPhoto = active === null ? null : photos[active];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={(event) => openPhoto(index, event.currentTarget)}
            aria-label={`View larger photo ${index + 1} of ${photos.length}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:border-[#0879C7] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0879C7]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.035] motion-reduce:transition-none"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#07558C] shadow-md">
                <ZoomIn size={16} aria-hidden="true" /> View photo
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Work photo ${active! + 1} of ${photos.length}`}
          className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 p-3 text-white sm:p-6"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-white/90">
              {active! + 1} of {photos.length}
            </p>
            <button
              ref={closeButton}
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close photo"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <div className="relative my-3 min-h-0 flex-1">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-between gap-2 pb-1">
            <button
              type="button"
              onClick={() => setActive((current) => current === null ? null : (current - 1 + photos.length) % photos.length)}
              aria-label="Previous photo"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/15 px-4 font-semibold hover:bg-white/25"
            >
              <ArrowLeft size={19} aria-hidden="true" /> Previous
            </button>
            <p className="hidden text-center text-sm text-white/80 sm:block">{selectedPhoto.caption}</p>
            <button
              type="button"
              onClick={() => setActive((current) => current === null ? null : (current + 1) % photos.length)}
              aria-label="Next photo"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white/15 px-4 font-semibold hover:bg-white/25"
            >
              Next <ArrowRight size={19} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
