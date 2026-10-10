'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import { fadeUp } from '@/lib/animations';
import { company, mailto } from '@/lib/company';

const whatToExpect = [
  'A 30-minute call to understand your workflow and the inspections you do',
  'A live demonstration of the whole workflow, from site photographs to an approved report',
  'If it fits, a free pilot on your own inspections, with how your data is handled agreed in writing first',
  'A no-pressure follow-up to discuss whether AECAI fits your firm',
];

const demoEmailBody = [
  'Name:',
  'Company:',
  'Job title:',
  'Company size:',
  'Phone:',
  'Preferred contact (email, phone or either):',
  '',
  'A typical inspection you would like to see demonstrated',
  '(for example: medium principal inspection of a 3-span concrete bridge on a rural A-road, about 200 photos, full CS 450 report):',
  '',
].join('\r\n');

export default function BookDemoPage() {
  return (
    <>
      {/* Hero strip */}
      <section className="relative bg-ink-900 min-h-[40vh] flex items-center overflow-hidden pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 custom={0} variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight leading-[1.05] mb-4">
              Book a demonstration.
            </motion.h1>
            <motion.p custom={1} variants={fadeUp} className="text-ink-300 text-lg leading-relaxed">
              Free and without commitment. We&rsquo;ll show you the whole workflow and talk through how it would fit your inspections.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: what to expect */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 custom={0} variants={fadeUp} className="font-heading font-semibold text-3xl text-ink-900 tracking-tight mb-6">
                What to expect
              </motion.h2>
              <ul className="flex flex-col gap-4">
                {whatToExpect.map((item, i) => (
                  <motion.li key={item} custom={i + 1} variants={fadeUp} className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-brand mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-ink-700 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div custom={5} variants={fadeUp} className="mt-10 bg-white border border-ink-200 rounded-2xl p-6">
                <p className="text-ink-600 text-sm leading-relaxed">
                  Please don&rsquo;t send inspection photographs or reports by email. If a pilot goes ahead, we agree in writing how your data is handled before you share any.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: request by email */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="bg-white border border-ink-200 rounded-2xl p-8 shadow-sm"
            >
              <h2 className="font-heading font-semibold text-2xl text-ink-900 mb-4">Request a demo by email</h2>
              <p className="text-ink-600 leading-relaxed mb-8">
                Your email opens with a few short questions. Answer what you can, and we&rsquo;ll come back to you to arrange a time.
              </p>
              <BrandButton href={mailto('Demo request', demoEmailBody)} variant="primary" className="w-full justify-center" showArrow>
                Email to book a demo
              </BrandButton>
              <p className="text-ink-600 text-sm leading-relaxed mt-6">
                Or email{' '}
                <a href={`mailto:${company.email}`} className="font-medium text-ink-900 underline hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded">
                  {company.email}
                </a>{' '}
                or call{' '}
                <a href={company.phoneHref} className="font-medium text-ink-900 underline hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded">
                  {company.phoneDisplay}
                </a>
                .
              </p>
              <p className="text-ink-500 text-sm leading-relaxed mt-3">
                How we use your details:{' '}
                <Link href="/privacy" className="underline hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded">
                  privacy notice
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
