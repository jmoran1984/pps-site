import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { routes } from "@/lib/routes";

export default function BackToHome() {
  return (
    <Link
      href={routes.home}
      className="inline-flex min-h-11 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-[#005A9C] transition-colors hover:bg-blue-50 hover:text-[#123B63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#005A9C]"
    >
      <ArrowLeft size={18} aria-hidden="true" />
      Back to Home
    </Link>
  );
}
