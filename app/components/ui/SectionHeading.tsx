interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="text-xs font-mono font-medium uppercase tracking-widest text-accent mb-4">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-heading leading-heading text-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg leading-body max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
