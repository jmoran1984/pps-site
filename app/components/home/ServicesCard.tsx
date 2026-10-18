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
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#005A9C] hover:shadow-xl"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
        <Icon
          className="text-[#005A9C]"
          size={30}
          strokeWidth={1.75}
        />
      </div>

      <h3 className="text-2xl font-bold text-[#123B63]">
        {title}
      </h3>

      <p className="mt-3 flex-grow leading-7 text-slate-600">
        {description}
      </p>

      <div className="mt-5 flex items-center gap-2 font-semibold text-[#005A9C]">
        Learn More

        <ArrowRight
          className="transition-transform duration-300 group-hover:translate-x-1"
          size={18}
        />
      </div>
    </Link>
  );
}