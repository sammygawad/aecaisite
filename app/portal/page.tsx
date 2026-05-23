import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Calendar, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portal — AECAI',
  description: 'AECAI inspection portal dashboard',
};

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-ink-50 flex flex-col">
      {/* Portal header — separate from main Navbar */}
      <header className="bg-white border-b border-ink-200 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded">
          <Image
            src="/Images/AECAI Logo.png"
            alt="AECAI"
            width={110}
            height={34}
            className="h-8 w-auto"
          />
        </Link>
        <Link
          href="/login"
          className="text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded px-3 py-1.5"
        >
          Sign out
        </Link>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="max-w-lg mx-auto">
          <span className="inline-block bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            Portal
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-ink-900 tracking-tight mb-4">
            Portal dashboard coming soon.
          </h1>
          <p className="text-ink-500 text-lg leading-relaxed mb-12">
            You&rsquo;re signed in. The AECAI inspection dashboard is being prepared and will be available in your account shortly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/book-demo"
              className="group flex flex-col items-start gap-3 bg-white border border-ink-200 rounded-2xl p-6 text-left hover:shadow-md hover:border-brand/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <div className="bg-brand/10 text-brand rounded-xl h-10 w-10 flex items-center justify-center">
                <Calendar className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-heading font-semibold text-ink-900 mb-1">Book a demo</p>
                <p className="text-ink-500 text-sm leading-relaxed">See the live workflow on your own inspection data.</p>
              </div>
            </Link>

            <Link
              href="/contact"
              className="group flex flex-col items-start gap-3 bg-white border border-ink-200 rounded-2xl p-6 text-left hover:shadow-md hover:border-brand/40 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <div className="bg-brand/10 text-brand rounded-xl h-10 w-10 flex items-center justify-center">
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-heading font-semibold text-ink-900 mb-1">Contact your account manager</p>
                <p className="text-ink-500 text-sm leading-relaxed">Get in touch with the AECAI team directly.</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
