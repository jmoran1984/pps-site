import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Philadelphia Plumbing Services — Home"
      className="flex h-full min-w-0 items-center"
    >
      <Image
        src="/images/philadelphia-legacy-logo.svg"
        alt="Philadelphia Plumbing Services, LLC"
        width={330}
        height={221}
        priority
        className="block h-[48px] w-auto max-w-full object-contain sm:h-[60px] xl:h-[64px]"
      />
    </Link>
  );
}
