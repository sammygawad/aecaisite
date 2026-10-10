'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CtaBand from '@/components/ui/CtaBand';
import { fadeUp } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Capture on site',
    body: 'Inspectors open AECAI on an Android phone or in the browser and record observations against your inspection form, organised by location, element and field.',
    bullets: [
      'Standard Bridge, Building and Concrete forms, or build your own',
      'AI can draft a form from one to five of your past reports',
      'Photos tied to the element, with GPS, tags and notes',
      'The Android app works without mobile signal (early access)',
    ],
    bg: 'bg-white',
  },
  {
    number: '02',
    title: 'AI defect analysis',
    body: 'After upload, computer vision outlines cracks and spalling on each photograph, typically within a minute or two. AI Scan suggests other defects with type, severity and location.',
    bullets: [
      'Crack and spalling outlines drawn on the photo',
      'AI Scan for a broader, RICS-style defect set',
      'Detection is an aid to the engineer, still being tested on real inspections',
    ],
    bg: 'bg-ink-50',
  },
  {
    number: '03',
    title: 'Engineer review',
    body: 'The platform never replaces engineering judgement. The engineer accepts, rejects or adds findings, and can edit anything AI has written.',
    bullets: [
      'Accept, reject or add findings',
      'Edit or override any AI-written text',
      'Audit log of every change',
    ],
    bg: 'bg-white',
  },
  {
    number: '04',
    title: 'Report and approval',
    body: 'Report Studio drafts a Word or PDF report from the form data and findings, in your firm’s own house style. A registered engineer approves it before it is issued.',
    bullets: [
      'House style learnt from your previous reports',
      'A standard draft built without AI, with optional AI writing',
      'Watermarked DRAFT until approved',
      'Approval needs the engineer’s multi-factor sign-in',
    ],
    bg: 'bg-ink-50',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 custom={0} variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              From paper forms to AI-assisted reports, without changing your sign-off process.
            </motion.h1>
            <motion.p custom={1} variants={fadeUp} className="text-ink-300 text-lg md:text-xl leading-relaxed">
              AECAI sits inside your existing inspection workflow. The engineer remains in control. The platform handles the admin.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Step-by-step sections */}
      {steps.map((step) => (
        <section key={step.number} className={`${step.bg} py-24`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="max-w-3xl"
            >
              <motion.div custom={0} variants={fadeUp}>
                <span className="font-heading font-semibold text-sm text-ink-500 block mb-3">
                  Step {step.number}
                </span>
                <h2 className="font-heading font-semibold text-4xl text-ink-900 tracking-tight mb-4">
                  {step.title}
                </h2>
                <p className="text-ink-600 text-lg leading-relaxed mb-6">{step.body}</p>
                <ul className="flex flex-col gap-3">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span className="text-ink-700 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
