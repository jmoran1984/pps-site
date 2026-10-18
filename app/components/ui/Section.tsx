type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: Props) {
  return (
    <section className={`py-10 sm:py-16 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}