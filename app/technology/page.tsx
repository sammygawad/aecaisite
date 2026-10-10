'use client';

import { motion } from 'framer-motion';
import { Smartphone, Database, Eye, SquareCheck as CheckSquare, FileText, Download, Server, Globe, Clock, Lock, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaBand from '@/components/ui/CtaBand';
import { fadeUp } from '@/lib/animations';

const archSteps = [
  { icon: Smartphone, label: 'Capture', sub: 'Android app or browser' },
  { icon: Database, label: 'Storage', sub: 'Database and files in Ireland (EU)' },
  { icon: Eye, label: 'Computer vision', sub: 'Crack and spalling outlines' },
  { icon: CheckSquare, label: 'Engineer review', sub: 'Accept, reject or add findings' },
  { icon: FileText, label: 'Report Studio', sub: 'Drafts in your house style' },
  { icon: Download, label: 'Approval and issue', sub: 'Word or PDF, after a registered engineer approves' },
];

const dataCards = [
  {
    icon: Server,
    title: 'Stored in Ireland',
    body: 'Inspection records and photographs are stored in our database provider’s Ireland (EU) region.',
  },
  {
    icon: Globe,
    title: 'AI processing can happen elsewhere',
    body: 'Computer vision runs on cloud GPUs, and AI Scan and AI writing use large language models from Anthropic, Google or OpenAI. These can process data outside the UK and EU.',
  },
  {
    icon: Clock,
    title: 'Kept for 7 years by default',
    body: 'Inspection records are kept for 7 years by default. Your firm can shorten this.',
  },
  {
    icon: Lock,
    title: 'Model training only if you opt in',
    body: 'Your photographs are used to improve our models only if your firm opts in. It is off by default, and the data is de-identified first.',
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 custom={0} variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              The engineering behind the platform.
            </motion.h1>
            <motion.p custom={1} variants={fadeUp} className="text-ink-300 text-lg md:text-xl leading-relaxed">
              How AECAI&rsquo;s computer vision and report drafting work, where your data is held, and where the engineer stays in charge.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Computer Vision */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="max-w-3xl"
          >
            <motion.div custom={0} variants={fadeUp}>
              <h2 className="font-heading font-semibold text-4xl text-ink-900 tracking-tight mb-4">
                Computer vision for cracks and spalling.
              </h2>
              <p className="text-ink-600 text-lg leading-relaxed mb-6">
                AECAI&rsquo;s computer vision looks for cracks and spalling on site photographs and draws each one as an outline for the engineer to check. A separate AI Scan suggests a broader, RICS-style set of defects with type, severity and location.
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                {[
                  'Cracks: outlined on the photograph',
                  'Spalling: outlined on the photograph',
                  'Other defects: suggested by AI Scan, with type, severity and location',
                  'Results typically arrive within a minute or two of upload',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-ink-600 leading-relaxed">
                Detection is an aid to the engineer and is still being tested on real inspections. The engineer accepts, rejects or adds findings, and a registered engineer approves every report.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Report Generation */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="max-w-3xl"
          >
            <motion.div custom={0} variants={fadeUp}>
              <h2 className="font-heading font-semibold text-4xl text-ink-900 tracking-tight mb-4">
                Reports in your firm&rsquo;s own house style.
              </h2>
              <p className="text-ink-600 text-lg leading-relaxed mb-6">
                Report Studio builds a standard draft from the form data and findings without using AI. Your engineers can then have AI rewrite or extend it. AECAI learns your house style from your previous reports, without copying their findings.
              </p>
              <p className="text-ink-600 leading-relaxed mb-6">
                A registered engineer approves every report before it is issued. The platform drafts reports; engineers own them.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Standard draft built without AI',
                  'Optional AI writing, included in the service',
                  'House style learnt from your past reports',
                  'Edit or override any text before approval',
                  'Word and PDF, watermarked DRAFT until approved',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="text-center mb-12">
              <SectionHeader
                heading="Engineer in the loop by design."
                subtext="The approval gate is enforced in the database: a report cannot be issued until a registered engineer approves it, and approval needs a multi-factor sign-in."
                align="center"
              />
            </motion.div>
            <motion.div custom={1} variants={fadeUp}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 flex-wrap">
                {archSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 md:gap-0">
                    <div className="flex flex-col items-center bg-white border border-ink-200 rounded-2xl p-5 w-36 text-center">
                      <div className="bg-brand/10 text-brand rounded-xl h-10 w-10 flex items-center justify-center mb-3">
                        <step.icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <p className="font-heading font-semibold text-ink-900 text-sm">{step.label}</p>
                      <p className="text-ink-500 text-xs mt-1 leading-snug">{step.sub}</p>
                    </div>
                    {i < archSteps.length - 1 && (
                      <ArrowRight className="h-5 w-5 text-brand/50 flex-shrink-0 mx-2 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Where your data is held */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader
                heading="Where your data is held."
                subtext="We can give you the full list of service providers we use before a pilot starts."
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-white border border-ink-200 rounded-2xl p-8"
                >
                  <div className="bg-brand/10 text-brand rounded-xl h-12 w-12 flex items-center justify-center mb-5">
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

      <CtaBand />
    </>
  );
}
