import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
  align?: 'left' | 'center';
  className?: string;
  headingClassName?: string;
  onDark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = 'left',
  className,
  headingClassName,
  onDark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}>
      {eyebrow && (
        <span className="text-brand text-sm font-medium tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'font-heading font-semibold text-4xl md:text-5xl tracking-tight leading-[1.1]',
          onDark ? 'text-white' : 'text-ink-900',
          headingClassName
        )}
      >
        {heading}
      </h2>
      {subtext && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            align === 'center' && 'max-w-2xl',
            align === 'left' && 'max-w-2xl',
            onDark ? 'text-ink-300' : 'text-ink-600'
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
