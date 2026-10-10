'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Search, FileText, Smartphone, Eye, CircleCheck as CheckCircle, BookOpen, ChevronRight } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaBand from '@/components/ui/CtaBand';

import { fadeUp } from '@/lib/animations';

const problemCards = [
  {
    icon: ClipboardList,
    title: 'Field capture',
    body: 'Paper forms and disconnected photos. No structured link between site observations and the inspection items they describe.',
  },
  {
    icon: Search,
    title: 'Defect descriptions',
    body: 'Defect descriptions and condition grades vary from one inspector to the next, and are hard to check afterwards.',
  },
  {
    icon: FileText,
    title: 'Report production',
    body: 'On our co-founder’s own inspections, about 7 hours in every 10 go on the write-up: sorting photos, describing defects and typing the report.',
  },
];

const solutionBlocks = [
  {
    number: '01',
    title: 'Capture on site',
    body: 'Inspectors record observations and photographs against a configurable form, organised by location, element and field.',
    bullets: [
      'Standard Bridge, Building and Concrete forms, or build your own',
      'AI can draft a form from one to five of your past reports',
      'Photos tied to the element, with GPS, tags and notes',
      'Android app that works without signal (early access)',
    ],
  },
  {
    number: '02',
    title: 'Defect detection',
    body: 'Computer vision outlines cracks and spalling on uploaded photographs, typically within a minute or two. AI Scan suggests other defects with type, severity and location.',
    bullets: [
      'Crack and spalling outlines drawn on the photo',
      'AI Scan for a broader, RICS-style defect set',
      'The engineer accepts, rejects or adds findings',
      'An aid to the engineer, still being tested on real inspections',
    ],
  },
  {
    number: '03',
    title: 'Report drafting',
    body: 'Report Studio drafts the report from the form data and findings, in your firm’s own house style, learnt from your previous reports.',
    bullets: [
      'Word and PDF from the same draft',
      'Watermarked DRAFT until approved',
      'A registered engineer approves every report before it is issued',
      'Audit log of every change',
    ],
  },
];

const workflowSteps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Capture',
    body: 'The inspector records observations and photographs against the form, on site.',
  },
  {
    number: '02',
    icon: Eye,
    title: 'Analyse',
    body: 'Computer vision outlines cracks and spalling. AI Scan suggests other defects.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Review',
    body: 'The engineer accepts, rejects or adds findings in the web console.',
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Report',
    body: 'Report Studio drafts the report. A registered engineer approves it before issue.',
  },
];

const founders = [
  {
    name: 'Sammy Gawad',
    role: 'Co-founder and Director',
    body: 'Practising civil engineer who inspects bridges and reservoirs and writes these reports. BSc Construction Engineering Management, Ulster University. Built the platform.',
  },
  {
    name: 'Mohamed Ragab',
    role: 'Co-founder and Director',
    body: 'Structural engineer turned AI researcher. MSc Digital Construction Analytics and BIM, with distinction, Ulster University. Trained the defect models.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16 bg-ink-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" className="max-w-5xl">
            <motion.h1 custom={0} variants={fadeUp} className="font-heading font-bold text-5xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6">
              From site photograph to signed report, with the engineer in the loop.
            </motion.h1>
            <motion.p custom={1} variants={fadeUp} className="text-ink-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              AECAI reads an inspector&rsquo;s photographs, flags the defects and drafts the structural report for a registered engineer to check and sign.
            </motion.p>
            <motion.div custom={2} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <BrandButton href="/book-demo" variant="primary" size="lg" showArrow>
                Book a Demo
              </BrandButton>
              <BrandButton href="/how-it-works" variant="outline-white" size="lg">
                See how it works
              </BrandButton>
            </motion.div>
            <motion.p custom={3} variants={fadeUp} className="text-ink-300 text-sm">
              Built in Belfast by two engineers &nbsp;&bull;&nbsp; AI drafts, the engineer decides and signs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp}>
              <SectionHeader
                heading="Inspection reporting still runs on paper and Word."
                subtext="Many structural inspections still rely on paper forms, phone photos sorted by hand and Word reports typed from scratch."
                className="mb-12"
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="border border-ink-200 rounded-2xl p-8"
                >
                  <div className="bg-brand/10 text-brand rounded-xl h-12 w-12 flex items-center justify-center mb-6">
                    <card.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-ink-900 mb-3">{card.title}</h3>
                  <p className="text-ink-600 leading-relaxed">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What AECAI does */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader heading="What AECAI does." />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutionBlocks.map((block, i) => (
                <motion.div
                  key={block.number}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-white border border-ink-200 rounded-2xl p-8"
                >
                  <span className="font-heading font-semibold text-sm text-ink-500 block mb-3">{block.number}</span>
                  <h3 className="font-heading font-semibold text-2xl text-ink-900 mb-4">{block.title}</h3>
                  <p className="text-ink-600 leading-relaxed mb-6">{block.body}</p>
                  <ul className="flex flex-col gap-3">
                    {block.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-ink-700">
                        <ChevronRight className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader heading="From site to signed report." />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i + 1}
                  variants={fadeUp}
                  className="flex flex-col items-start p-6 rounded-2xl border border-ink-200 bg-white"
                >
                  <span className="font-heading font-semibold text-sm text-ink-500 mb-3">{step.number}</span>
                  <step.icon className="h-6 w-6 text-ink-500 mb-3" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-xl text-ink-900 mb-2">{step.title}</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
            <motion.div custom={5} variants={fadeUp} className="mt-10">
              <BrandButton href="/how-it-works" variant="ghost" showArrow>
                See the full workflow
              </BrandButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who built it */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader heading="The engineer who writes the reports and the engineer who trained the models." />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {founders.map((person, i) => (
                <motion.div
                  key={person.name}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-white border border-ink-200 rounded-2xl p-8"
                >
                  <h3 className="font-heading font-semibold text-xl text-ink-900">{person.name}</h3>
                  <p className="text-ink-500 text-sm mb-4">{person.role}</p>
                  <p className="text-ink-700 leading-relaxed">{person.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand />
    </>
  );
}
