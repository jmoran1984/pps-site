import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Philadelphia Plumbing Services — Home"
      className="flex min-w-0 items-center gap-2 transition-opacity hover:opacity-90 sm:gap-3"
    >
      <Image
        src="/images/logo-icon.png"
        alt=""
        width={48}
        height={48}
        priority
        className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
      />
      <div className="min-w-0 leading-tight">
        <span className="block text-[13px] font-extrabold uppercase tracking-tight text-[#123B63] min-[360px]:text-sm sm:text-base">
          Philadelphia
        </span>
        <span className="block whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.06em] text-[#005A9C] min-[360px]:text-[10px] sm:text-xs sm:tracking-[0.12em]">
          Plumbing Services
        </span>
        <span className="hidden text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:block">
          Licensed • Insured
        </span>
      </div>
    </Link>
  );
}
