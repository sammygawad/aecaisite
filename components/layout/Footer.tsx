import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/lib/company';

const productLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Technology', href: '/technology' },
];

const companyLinks = [
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Demo', href: '/book-demo' },
  { label: 'Privacy', href: '/privacy' },
];

const linkClass =
  'text-ink-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded inline-block w-fit">
              <Image
                src="/Images/AECAI_Logo_-_White.png"
                alt="AECAI"
                width={130}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-ink-400 text-sm leading-relaxed max-w-xs">
              Software that turns an inspector&rsquo;s site photographs into a drafted structural report for a registered engineer to check and sign.
            </p>
          </div>

          {/* Col 2: Product */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Product</p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Company</p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`mailto:${company.email}`} className={linkClass}>
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.phoneHref} className={linkClass}>
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="text-ink-400 text-sm">Belfast, Northern Ireland</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip: statutory company details */}
        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col gap-2">
          <p className="text-ink-400 text-sm">
            &copy; 2026 {company.name}. Registered in {company.registeredIn}, company number {company.number}.
          </p>
          <p className="text-ink-400 text-sm">Registered office: {company.registeredOffice}.</p>
        </div>
      </div>
    </footer>
  );
}
