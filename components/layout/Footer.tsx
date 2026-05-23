import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const productLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Technology', href: '/technology' },
];

const companyLinks = [
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Demo', href: '/book-demo' },
  { label: 'Login', href: '/login' },
  { label: 'Sign Up', href: '/signup' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Data Processing Agreement', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Col 1 — Brand */}
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
              AI-powered structural inspection, defect detection, and automated report generation for UK and Ireland engineering firms.
            </p>
          </div>

          {/* Col 2 — Product */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Product</h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">Legal</h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-500 text-sm">
            &copy; 2026 AECAI Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-ink-500 text-sm">Made in the UK &#127468;&#127463;</span>
            <a
              href="#"
              aria-label="AECAI on LinkedIn"
              className="text-ink-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded p-1"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
