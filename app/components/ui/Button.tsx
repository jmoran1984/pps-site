import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  contentClassName?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  contentClassName,
}: ButtonProps) {
  const classes = clsx(
    "group inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
    {
      "bg-[#0879C7] hover:bg-[#0768A9]": variant === "primary",

      "bg-[#F5F7F9] hover:bg-[#E8EEF3]": variant === "secondary",

      "border border-[#0879C7] bg-transparent hover:bg-[#0879C7]":
        variant === "outline",
    },
    className,
  );

  const content = (
    <span
      className={clsx(
        "inline-flex items-center justify-center gap-2 transition-colors duration-300",
        {
          "text-white": variant === "primary",
          "text-[#07558C]": variant === "secondary",
          "text-[#0879C7] group-hover:text-white": variant === "outline",
        },
        contentClassName,
      )}
    >
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
