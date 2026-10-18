import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Philadelphia Plumbing Services — Home" className="flex min-w-0 items-center">
      <Image
        src="/images/philadelphia-legacy-logo.svg"
        alt="Philadelphia Plumbing Services, LLC"
        width={330}
        height={221}
        priority
        className="h-auto w-[155px] min-[360px]:w-[170px] sm:w-[230px] lg:w-[260px] xl:w-[280px]"
      />
    </Link>
  );
}
