import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  onDark?: boolean;
  className?: string;
}

export default function StatCard({ value, label, onDark = false, className }: StatCardProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <span className={cn('font-heading font-bold text-4xl md:text-5xl tracking-tight', onDark ? 'text-brand' : 'text-ink-900')}>
        {value}
      </span>
      <span className={cn('text-xs uppercase tracking-wider font-medium', onDark ? 'text-ink-300' : 'text-ink-600')}>
        {label}
      </span>
    </div>
  );
}
