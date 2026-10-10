import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrandButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses = {
  primary: 'bg-brand text-white hover:bg-brand-600 hover:scale-[1.02]',
  secondary: 'bg-ink-900 text-white hover:bg-ink-800',
  outline: 'border border-ink-300 text-ink-900 hover:border-ink-900 bg-transparent',
  'outline-white': 'border border-white/40 text-white hover:border-white bg-transparent',
  ghost: 'text-ink-700 hover:text-brand bg-transparent',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function BrandButton({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
  showArrow = false,
  type = 'button',
  disabled = false,
}: BrandButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    if (/^(mailto:|tel:|https?:)/.test(href)) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
