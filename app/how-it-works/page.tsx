'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import CtaBand from '@/components/ui/CtaBand';
import { fadeUp } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Capture on site',
    body: 'Inspectors open AECAI on their phone or tablet and select the structure and element type. Forms are pre-built for beams, columns, decks, abutments, and more.',
    bullets: [
      'Hierarchical data model: Project → Structure → Element → Item → Photo',
      'Location referencing for every observation',
      'Offline-first — works without mobile signal',
      'Photos auto-tagged to inspection items',
      'Voice notes (Phase 2)',
    ],
    // Placeholder: structural engineering site
    image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Inspector recording observations on a tablet at a concrete bridge',
    imageBg: 'bg-white',
  },
  {
    number: '02',
    title: 'AI defect analysis',
    body: 'Once photos are uploaded, the computer vision engine processes them in seconds. It classifies defects, estimates extent, and returns annotated images for engineer review.',
    bullets: [
      'Detects cracking, spalling, delamination, exposed reinforcement, and staining',
      'Severity indication and visible-extent estimation',
      'Bounding-box and segmentation-mask annotations',
      'Trained on CODEBRIM, CrackForest, and AECAI\'s own dataset',
    ],
    // Placeholder: cracked concrete close up
    image: 'https://images.pexels.com/photos/12738869/pexels-photo-12738869.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Annotated photograph showing cracking and spalling in concrete',
    imageBg: 'bg-ink-50',
  },
  {
    number: '03',
    title: 'Engineer review and approval',
    body: 'The platform never replaces engineering judgement. Every AI finding is presented in a review panel where the engineer can approve, amend, override, or reject.',
    bullets: [
      'Side-by-side raw and annotated photo comparison',
      'Edit defect class and severity',
      'Add free-text notes to any finding',
      'Full audit trail of engineer changes',
    ],
    // Placeholder: engineer tablet site
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Engineer reviewing AI findings on a laptop in an office',
    imageBg: 'bg-white',
  },
  {
    number: '04',
    title: 'Automated report generation',
    body: 'Once reviewed, the platform generates a structured Word or PDF inspection report — branded to your firm, aligned with industry standards, and ready to issue under your professional registration.',
    bullets: [
      'Client-specific report templates',
      'Preset commentary by defect type and severity',
      'Figure numbering and photo embedding handled automatically',
      'Engineer signs off as normal — liability is unchanged',
      'Compliant with BD 63, CS 450, and CS 454',
    ],
    // Placeholder: drone surveying construction
    image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Completed structural inspection report document on a desk',
    imageBg: 'bg-ink-50',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span custom={0} variants={fadeUp} className="inline-block text-brand text-sm font-medium tracking-widest uppercase mb-6">
              How It Works
            </motion.span>
            <motion.h1 custom={1} variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              From paper forms to AI-assisted reports — without changing your sign-off process.
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-ink-300 text-lg md:text-xl leading-relaxed">
              AECAI sits inside your existing inspection workflow. The engineer remains in control. The platform handles the admin.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Step-by-step sections */}
      {steps.map((step, idx) => (
        <section key={step.number} className={`${step.imageBg} py-24`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className={`grid md:grid-cols-2 gap-12 items-center`}
            >
              <motion.div custom={0} variants={fadeUp} className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <span className="font-heading font-bold text-[8rem] leading-none text-brand/15 block -mb-4">
                  {step.number}
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
              <motion.div custom={1} variants={fadeUp} className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <div className="rounded-2xl overflow-hidden bg-ink-200 aspect-[4/3] shadow-sm">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Bottom CTA strip */}
      <section className="bg-ink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-semibold text-2xl text-ink-900">
              Want to see this on your own inspection?
            </p>
            <p className="text-ink-600 mt-1">Free demonstration — no commitment required.</p>
          </div>
          <BrandButton href="/book-demo" variant="primary" size="lg" showArrow>
            Book a Demo
          </BrandButton>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
