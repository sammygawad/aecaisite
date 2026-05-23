'use client';

import { motion } from 'framer-motion';
import { Smartphone, Cloud, Eye, SquareCheck as CheckSquare, FileText, Download, Shield, Server, Clock, Lock, Database, BookOpen, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaBand from '@/components/ui/CtaBand';
import { fadeUp } from '@/lib/animations';

const archSteps = [
  { icon: Smartphone, label: 'Mobile App', sub: 'Offline-first field capture' },
  { icon: Cloud, label: 'Cloud API', sub: 'Secure UK-hosted infrastructure' },
  { icon: Eye, label: 'CV Inference', sub: 'Defect detection engine' },
  { icon: CheckSquare, label: 'Engineer Review', sub: 'In-the-loop approval gate' },
  { icon: FileText, label: 'Report Engine', sub: 'Standards-aligned generation' },
  { icon: Download, label: 'Final Report', sub: 'Word / PDF output' },
];

const securityCards = [
  {
    icon: Shield,
    title: 'UK GDPR compliant',
    body: 'Data Processing Agreement provided with every client engagement. Your data is handled in accordance with UK GDPR at all times.',
  },
  {
    icon: Server,
    title: 'UK-hosted infrastructure',
    body: 'All inspection data is stored and processed within UK / EU regions. Your data never leaves the jurisdiction.',
  },
  {
    icon: Clock,
    title: 'Default 7-day retention',
    body: 'Inspection images are deleted after report delivery unless a longer retention period is explicitly agreed in writing.',
  },
  {
    icon: Lock,
    title: 'No training without consent',
    body: 'Client images are never used to train or fine-tune models without explicit written agreement. Your data is yours.',
  },
];

const datasets = [
  {
    icon: Database,
    name: 'CODEBRIM',
    desc: 'A public concrete bridge defect dataset containing over 6,000 annotated images across six defect classes including cracking, spalling, efflorescence, and exposed reinforcement. Used as the foundation for supervised pre-training.',
  },
  {
    icon: Database,
    name: 'CrackForest',
    desc: 'A pavement and concrete crack segmentation dataset with pixel-level annotations. Provides fine-grained crack geometry data for segmentation mask training.',
  },
  {
    icon: BookOpen,
    name: 'AECAI Proprietary Dataset',
    desc: 'A growing collection of 3,000–5,000+ annotated real-world inspection images from UK and Ireland structures. Fine-tuning dataset developed with practising structural engineers — and expanding with every inspection.',
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span custom={0} variants={fadeUp} className="inline-block text-brand text-sm font-medium tracking-widest uppercase mb-6">
              Technology
            </motion.span>
            <motion.h1 custom={1} variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              The engineering behind the platform.
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-ink-300 text-lg md:text-xl leading-relaxed">
              AECAI combines field-tested computer vision models, large language models with engineering guard-rails, and secure UK-hosted infrastructure — built specifically for structural inspection.
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
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div custom={0} variants={fadeUp}>
              <span className="text-brand text-sm font-medium tracking-widest uppercase mb-4 block">Computer Vision</span>
              <h2 className="font-heading font-semibold text-4xl text-ink-900 tracking-tight mb-4">
                Computer vision tuned for concrete defects.
              </h2>
              <p className="text-ink-600 text-lg leading-relaxed mb-6">
                The AECAI CV engine is trained on CODEBRIM and CrackForest open research datasets and fine-tuned on AECAI&rsquo;s proprietary annotated inspection imagery. It classifies cracking, spalling, delamination, exposed reinforcement, and staining — outputting bounding boxes, segmentation masks, severity bands, and visible-extent estimates.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Cracking — width and pattern classification',
                  'Spalling — area and depth estimation',
                  'Delamination — hollow-sounding area mapping',
                  'Exposed reinforcement — bar count and condition',
                  'Staining — type and extent',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div custom={1} variants={fadeUp}>
              {/* Placeholder: cracked concrete close up */}
              <div className="rounded-2xl overflow-hidden bg-ink-100 aspect-[4/3] relative">
                <img
                  src="https://images.pexels.com/photos/12738869/pexels-photo-12738869.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Annotated photograph showing computer vision bounding boxes on concrete cracking"
                  className="w-full h-full object-cover"
                />
                {/* Simulated bounding box overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[30%] left-[20%] w-[30%] h-[25%] border-2 border-brand rounded-sm" />
                  <div className="absolute top-[28%] left-[20%] bg-brand text-white text-[10px] font-mono px-1.5 py-0.5 -translate-y-full">
                    CRACKING — MOD
                  </div>
                  <div className="absolute top-[60%] left-[55%] w-[20%] h-[18%] border-2 border-amber-400 rounded-sm" />
                  <div className="absolute top-[58%] left-[55%] bg-amber-400 text-white text-[10px] font-mono px-1.5 py-0.5 -translate-y-full">
                    SPALLING — LOW
                  </div>
                </div>
              </div>
              <p className="text-ink-400 text-xs text-center mt-3">Illustrative bounding-box annotation output from the CV engine</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LLM Report Generation */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div custom={0} variants={fadeUp} className="md:order-2">
              <span className="text-brand text-sm font-medium tracking-widest uppercase mb-4 block">Report Generation</span>
              <h2 className="font-heading font-semibold text-4xl text-ink-900 tracking-tight mb-4">
                Engineering-grade language, not generic AI prose.
              </h2>
              <p className="text-ink-600 text-lg leading-relaxed mb-6">
                AECAI uses a rules-driven preset commentary library, with entries selected by defect type and severity. A large language model (Claude) assembles the narrative under controlled, engineering-specific prompts — aligned with BD 63 (now CS 450), CS 454, and common UK inspection practice.
              </p>
              <p className="text-ink-600 leading-relaxed mb-6">
                Every output is reviewed and signed off by the client engineer before issue. The platform generates reports; engineers own them.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  'Rules-driven commentary library by defect class and severity',
                  'Consistent technical language aligned with industry standards',
                  'Engineer review gate before any report is issued',
                  'Full edit capability — override any AI-generated text',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div custom={1} variants={fadeUp} className="md:order-1">
              {/* Placeholder: drone surveying construction */}
              <div className="rounded-2xl overflow-hidden bg-ink-100 aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Structural inspection report document on a desk"
                  className="w-full h-full object-cover"
                />
              </div>
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
                eyebrow="Platform Architecture"
                heading="Engineer-in-the-loop by design."
                subtext="The review gate is not an optional feature — it is built into every data flow in the platform."
                align="center"
              />
            </motion.div>
            <motion.div custom={1} variants={fadeUp}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 flex-wrap">
                {archSteps.map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 md:gap-0">
                    <div className="flex flex-col items-center bg-white border border-ink-200 rounded-2xl p-5 w-36 text-center hover:shadow-md transition-shadow duration-300 hover:border-brand/40">
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
              <p className="text-center text-ink-500 text-sm mt-8 max-w-xl mx-auto">
                Engineer-in-the-loop review is built into the architecture — not bolted on.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader
                eyebrow="Security & Data"
                heading="Your data. Your control."
                subtext="AECAI is built to meet the data governance requirements of UK public sector and regulated engineering clients."
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-white border border-ink-200 rounded-2xl p-8 hover:shadow-md transition-shadow duration-300"
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

      {/* Datasets */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader
                eyebrow="Research Foundation"
                heading="Built on peer-reviewed datasets."
                subtext="The CV models are not black boxes — they are trained on documented, publicly available research datasets and AECAI&rsquo;s own growing annotated library."
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {datasets.map((ds, i) => (
                <motion.div
                  key={ds.name}
                  custom={i + 1}
                  variants={fadeUp}
                  className="border border-ink-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-brand/10 text-brand rounded-xl h-12 w-12 flex items-center justify-center mb-5">
                    <ds.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-ink-900 mb-3">{ds.name}</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">{ds.desc}</p>
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
