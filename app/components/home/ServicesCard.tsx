import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#005A9C] hover:shadow-xl sm:p-8"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 sm:mb-5 sm:h-14 sm:w-14">
        <Icon
          className="text-[#005A9C]"
          size={26}
          strokeWidth={1.75}
        />
      </div>

      <h3 className="text-xl font-bold leading-snug text-[#123B63] sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 flex-grow leading-6 text-slate-600 sm:leading-7">
        {description}
      </p>

      <div className="mt-4 flex items-center gap-2 font-semibold text-[#005A9C] sm:mt-5">
        Learn More

        <ArrowRight
          className="transition-transform duration-300 group-hover:translate-x-1"
          size={18}
        />
      </div>
    </Link>
  );
}