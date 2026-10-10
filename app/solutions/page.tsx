'use client';

import { motion } from 'framer-motion';
import { Building2, Link2, Boxes, Users, Waves } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaBand from '@/components/ui/CtaBand';
import { fadeUp } from '@/lib/animations';

const segments = [
  {
    icon: Building2,
    title: 'Engineering consultancies',
    desc: '5 to 50 people, Northern Ireland first. Your engineers inspect, photograph and write the reports themselves.',
    value: 'AECAI sorts the photos and drafts the report. Your engineer checks, approves and signs.',
    benefit: 'Free pilot',
  },
  {
    icon: Link2,
    title: 'Specialist inspection contractors',
    desc: 'Bridge, building and reservoir inspection specialists.',
    value: 'Reports in your house style from every inspector, with findings tied to each element.',
    benefit: 'House-style reports',
  },
  {
    icon: Users,
    title: 'Building surveying practices',
    desc: 'Practices carrying out RICS-style building surveys.',
    value: 'AI Scan suggests a broad, RICS-style defect set for the surveyor to check.',
    benefit: 'The surveyor stays in charge',
  },
];

const structures = [
  { icon: Link2, label: 'Bridges', desc: 'Road, rail and footbridges. A standard Bridge form is included.' },
  { icon: Building2, label: 'Buildings', desc: 'Structural inspections and building surveys. A standard Building form is included.' },
  { icon: Waves, label: 'Reservoirs and concrete structures', desc: 'Service reservoirs and other concrete structures. A standard Concrete form is included.' },
  { icon: Boxes, label: 'Any other structure', desc: 'Build your own form, or have AI draft one from your past reports.' },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 custom={0} variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              Built for the firms that inspect bridges, buildings and reservoirs.
            </motion.h1>
            <motion.p custom={1} variants={fadeUp} className="text-ink-300 text-lg md:text-xl leading-relaxed">
              AECAI is designed for consultancies and inspection contractors of 5 to 50 people, starting in Northern Ireland.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader heading="Who AECAI is for." />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {segments.map((seg, i) => (
                <motion.div
                  key={seg.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="border border-ink-200 rounded-2xl p-8"
                >
                  <div className="bg-brand/10 text-brand rounded-xl h-12 w-12 flex items-center justify-center mb-6">
                    <seg.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-ink-900 mb-2">{seg.title}</h3>
                  <p className="text-ink-500 text-sm mb-4">{seg.desc}</p>
                  <p className="text-ink-700 leading-relaxed mb-4">{seg.value}</p>
                  <span className="inline-block bg-ink-100 text-ink-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {seg.benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="max-w-3xl">
            <motion.div custom={0} variants={fadeUp} className="mb-8">
              <SectionHeader heading="Pricing." />
            </motion.div>
            <motion.div custom={1} variants={fadeUp} className="bg-white border border-ink-200 rounded-2xl p-8">
              <p className="font-heading font-semibold text-2xl text-ink-900 mb-4">
                The pilot is free and runs on your firm&rsquo;s own AI account. Pricing on request.
              </p>
              <p className="text-ink-600 leading-relaxed mb-8">
                AECAI uses your firm&rsquo;s own Claude, Gemini or OpenAI account for its AI features. You pay that provider directly for what you use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BrandButton href="/contact" variant="primary" showArrow>
                  Ask about the pilot
                </BrandButton>
                <BrandButton href="/book-demo" variant="outline">
                  Book a demo
                </BrandButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Structures */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader
                heading="Where AECAI works."
                subtext="Configurable forms mean you can inspect any structure. Computer vision currently looks for cracks and spalling."
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {structures.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-white border border-ink-200 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-brand/10 text-brand rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <s.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-semibold text-ink-900">{s.label}</h3>
                  </div>
                  <p className="text-ink-600 text-sm leading-relaxed">{s.desc}</p>
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
