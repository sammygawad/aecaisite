import BrandButton from './BrandButton';

interface CtaBandProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CtaBand({
  heading = 'Ready to see AECAI on a live project?',
  subtext = 'Free demonstration inspection. No commitment. We\'ll show you the whole workflow on your own data.',
  primaryLabel = 'Book your demo',
  primaryHref = '/book-demo',
  secondaryLabel = 'Talk to us',
  secondaryHref = '/contact',
}: CtaBandProps) {
  return (
    <section className="bg-brand py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-semibold text-4xl md:text-5xl tracking-tight text-white mb-4">
          {heading}
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <BrandButton href={primaryHref} variant="secondary" size="lg">
            {primaryLabel}
          </BrandButton>
          <BrandButton href={secondaryHref} variant="outline-white" size="lg">
            {secondaryLabel}
          </BrandButton>
        </div>
      </div>
    </section>
  );
}
