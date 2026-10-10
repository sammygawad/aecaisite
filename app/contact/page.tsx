'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import { fadeUp } from '@/lib/animations';
import { company, mailto } from '@/lib/company';

const contactDetails = [
  { icon: Mail, label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: Phone, label: 'Phone', value: company.phoneDisplay, href: company.phoneHref },
  { icon: MapPin, label: 'Registered office', value: `${company.name}, ${company.registeredOffice}`, href: null },
];

export default function ContactPage() {
  return (
    <>
      <div className="bg-white pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <motion.div initial="hidden" animate="visible">
              <motion.h1 custom={0} variants={fadeUp} className="font-heading font-bold text-5xl text-ink-900 tracking-tight leading-[1.05] mb-6">
                Talk to AECAI.
              </motion.h1>
              <motion.p custom={1} variants={fadeUp} className="text-ink-600 text-lg leading-relaxed mb-10">
                Whether you have a quick question, want to discuss your firm&rsquo;s inspection workload, or want to see the platform working, we&rsquo;d like to hear from you.
              </motion.p>

              <motion.div custom={2} variants={fadeUp} className="flex flex-col gap-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 border border-ink-200 rounded-xl p-4">
                    <div className="bg-brand/10 text-brand rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-ink-500 text-xs uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-ink-900 font-medium hover:text-brand-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-ink-900 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: email */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="border border-ink-200 rounded-2xl p-8 bg-white shadow-sm"
            >
              <h2 className="font-heading font-semibold text-2xl text-ink-900 mb-4">Email us</h2>
              <p className="text-ink-600 leading-relaxed mb-8">
                Tell us about your firm and the inspections you do, and say whether you would like an email reply, a call or a demo.
              </p>
              <BrandButton href={mailto('Enquiry from aecai.co.uk')} variant="primary" className="w-full justify-center" showArrow>
                Email {company.email}
              </BrandButton>
              <p className="text-ink-500 text-sm leading-relaxed mt-6">
                Please don&rsquo;t attach inspection photographs or reports yet. If we work together, we agree in writing how your data is handled first.
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
      </div>
    </>
  );
}
