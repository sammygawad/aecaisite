'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ClipboardList, Search, FileText, Smartphone, Eye, CircleCheck as CheckCircle, BookOpen, ChevronRight } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import SectionHeader from '@/components/ui/SectionHeader';
import StatCard from '@/components/ui/StatCard';
import CtaBand from '@/components/ui/CtaBand';

import { fadeUp } from '@/lib/animations';

const trustItems = ['BD 63', 'CS 450', 'CS 454', 'UK GDPR', 'IStructE', 'ICE'];

const problemCards = [
  {
    icon: ClipboardList,
    title: 'Field capture',
    body: 'Paper forms and disconnected photos. No structured link between site observations and the inspection items they describe.',
  },
  {
    icon: Search,
    title: 'Defect analysis',
    body: 'Visual interpretation of cracking, spalling and delamination is subjective, inconsistent, and impossible to audit at scale.',
  },
  {
    icon: FileText,
    title: 'Report production',
    body: 'Engineers spend up to 70% of their inspection time writing and formatting reports — not engineering.',
  },
];

const solutionRows = [
  {
    number: '01',
    title: 'Digital field capture',
    body: 'Inspectors record structured observations and photos directly on site — linked to the exact element and item being inspected.',
    bullets: [
      'Structured forms by element type',
      'Hierarchical data model: Project → Structure → Element → Item → Photo',
      'Offline-first mobile application',
      'Photos auto-linked to inspection items',
    ],
    // Placeholder: concrete bridge inspection
    image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Inspector on site at a concrete bridge',
    imageLeft: false,
  },
  {
    number: '02',
    title: 'Computer vision defect engine',
    body: 'Once photos are uploaded, the CV engine processes them in seconds — classifying defects, estimating extent, and returning annotated images.',
    bullets: [
      'Detects cracking, spalling, delamination, exposed reinforcement, and staining',
      'Severity indication and extent estimation',
      'Annotated image output for engineer review',
      'Trained on CODEBRIM and CrackForest datasets',
    ],
    // Placeholder: cracked concrete close up
    image: 'https://images.pexels.com/photos/12738869/pexels-photo-12738869.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Close up of concrete cracking and spalling defects',
    imageLeft: true,
  },
  {
    number: '03',
    title: 'Automated report generation',
    body: 'Structured inspection reports generated directly from field data and CV outputs — branded, compliant, and ready for engineer sign-off.',
    bullets: [
      'Structured reports from form data and CV outputs',
      'Rules-driven preset commentary by defect type and severity',
      'Engineer review and approval gate',
      'Client-branded and aligned with BD 63, CS 450, CS 454',
    ],
    // Placeholder: engineer tablet site
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Engineer reviewing inspection report on tablet',
    imageLeft: false,
  },
];

const workflowSteps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Capture',
    body: 'Inspector records observations and uploads photos via the mobile app.',
  },
  {
    number: '02',
    icon: Eye,
    title: 'Analyse',
    body: 'CV engine identifies and classifies defects, returns annotated images.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Review',
    body: 'Engineer approves, edits, or overrides AI findings in the web portal.',
  },
  {
    number: '04',
    icon: BookOpen,
    title: 'Report',
    body: 'Branded inspection report generated automatically — ready to issue.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      {/* Background: concrete bridge infrastructure photo (Pexels 1078884) */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay — heavier at left where text sits, lighter right */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/80 to-ink-900/50" />
          {/* Bottom fade to blend into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900/60 to-transparent" />
        </div>
        {/* Orange accent glow top-right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand/[0.12] blur-[120px] -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial="hidden" animate="visible" className="max-w-5xl">
            <motion.span custom={0} variants={fadeUp} className="inline-block text-brand text-sm font-medium tracking-widest uppercase mb-6">
              AI-Powered Structural Inspection
            </motion.span>
            <motion.h1 custom={1} variants={fadeUp} className="font-heading font-bold text-5xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6">
              Inspections, analysed and reported in a fraction of the time.
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-ink-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              AECAI is an end-to-end AI platform for structural engineers — capturing field data, detecting concrete defects with computer vision, and generating professional inspection reports. Built for the UK and Ireland.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <BrandButton href="/book-demo" variant="primary" size="lg" showArrow>
                Book a Demo
              </BrandButton>
              <BrandButton href="/how-it-works" variant="outline-white" size="lg">
                See how it works
              </BrandButton>
            </motion.div>
            <motion.p custom={4} variants={fadeUp} className="text-ink-500 text-sm">
              Built for engineers &nbsp;&bull;&nbsp; GDPR-compliant &nbsp;&bull;&nbsp; Engineer sign-off retained
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b border-ink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="text-ink-400 text-sm font-medium tracking-wider uppercase mr-2">
              Aligned with industry standards
            </span>
            {trustItems.map((item, i) => (
              <span key={item} className="flex items-center gap-6">
                {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-brand/60 hidden sm:inline-block" />}
                <span className="text-ink-500 font-medium tracking-wider uppercase text-sm">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp}>
              <SectionHeader
                eyebrow="The Problem"
                heading="Inspection workflows are stuck in the past."
                subtext="Most structural inspections still rely on paper forms, manual photo sorting, and Word-document reports. The result: bottlenecks, inconsistency, and engineering time wasted on admin."
                className="mb-12"
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="border border-ink-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
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

      {/* The Solution */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-16">
              <SectionHeader eyebrow="The Solution" heading="Three layers. One workflow." />
            </motion.div>
          </motion.div>
          <div className="flex flex-col gap-24">
            {solutionRows.map((row, i) => (
              <motion.div
                key={row.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <motion.div custom={0} variants={fadeUp} className={row.imageLeft ? 'md:order-2' : ''}>
                  <span className="font-heading font-bold text-7xl text-brand/20 leading-none block mb-4">{row.number}</span>
                  <h3 className="font-heading font-semibold text-3xl text-ink-900 mb-4">{row.title}</h3>
                  <p className="text-ink-600 text-lg leading-relaxed mb-6">{row.body}</p>
                  <ul className="flex flex-col gap-3">
                    {row.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-ink-700">
                        <ChevronRight className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <span className="text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div custom={1} variants={fadeUp} className={row.imageLeft ? 'md:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden bg-ink-200 aspect-[4/3]">
                    <Image
                      src={row.image}
                      alt={row.imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-ink-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { value: '70% → 20%', label: 'Report-writing time per inspection' },
              { value: '£220', label: 'Saved per inspection in engineer time' },
              { value: '22,000+', label: 'UK road bridges in scope' },
              { value: '76%', label: 'Of surveyed engineers open to AI inspection tools' },
            ].map((stat, i) => (
              <motion.div key={stat.label} custom={i} variants={fadeUp}>
                <StatCard value={stat.value} label={stat.label} onDark />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader eyebrow="The Workflow" heading="From site to signed report." />
            </motion.div>
            <div className="relative">
              <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {workflowSteps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    custom={i + 1}
                    variants={fadeUp}
                    className="flex flex-col items-start md:items-center md:text-center p-6 rounded-2xl border border-ink-200 hover:shadow-lg transition-shadow duration-300 bg-white"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand text-white font-heading font-bold text-sm flex items-center justify-center mb-4 flex-shrink-0">
                      {step.number}
                    </div>
                    <step.icon className="h-6 w-6 text-ink-400 mb-3" strokeWidth={1.5} />
                    <h3 className="font-heading font-semibold text-xl text-ink-900 mb-2">{step.title}</h3>
                    <p className="text-ink-600 text-sm leading-relaxed">{step.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div custom={5} variants={fadeUp} className="mt-10">
              <BrandButton href="/how-it-works" variant="ghost" showArrow>
                See the full workflow
              </BrandButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROI Teaser */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader eyebrow="The Numbers" heading="What AECAI saves your firm." />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div custom={1} variants={fadeUp}>
                <p className="text-ink-700 text-lg leading-relaxed">
                  On a typical 8-hour structural inspection at a £55/hour engineer day rate, AECAI cuts the report-writing share from 70% to 20%. That&rsquo;s 4 hours and{' '}
                  <strong className="text-ink-900">£220 saved per inspection</strong> — without changing how the engineer signs off.
                </p>
                <div className="mt-8">
                  <BrandButton href="/solutions" variant="ghost" showArrow>
                    Explore the numbers
                  </BrandButton>
                </div>
              </motion.div>
              <motion.div custom={2} variants={fadeUp}>
                <div className="border border-ink-200 rounded-2xl p-8 bg-white">
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center py-3 border-b border-ink-100">
                      <span className="text-ink-600 text-sm">10 reports per month</span>
                      <span className="font-heading font-semibold text-ink-900">£2,000 / month saved</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-ink-100">
                      <span className="text-ink-600 text-sm">Professional plan cost</span>
                      <span className="font-heading font-semibold text-ink-900">£200 / month</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-ink-50 rounded-xl px-4 -mx-1 mt-2">
                      <span className="text-ink-800 font-semibold">Annual saving</span>
                      <span className="font-heading font-bold text-brand text-2xl">£24,000</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Validation */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader eyebrow="Industry Evidence" heading="Engineers want this." />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  stat: '76%',
                  label: 'of UK & Ireland engineers surveyed are actively considering or open to AI inspection tools.',
                  source: 'AECAI Industry Survey, n=21, 2025',
                },
                {
                  stat: '91%',
                  label: 'of A/E/C project management professionals are aware of and accept LLMs as a working tool.',
                  source: 'A/E/C Industry Study, n=50, 2025',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.stat}
                  custom={i + 1}
                  variants={fadeUp}
                  className="border border-ink-200 rounded-2xl p-10"
                >
                  <span className="font-heading font-bold text-7xl text-brand leading-none block mb-4">{item.stat}</span>
                  <p className="text-ink-800 text-lg leading-relaxed mb-4">{item.label}</p>
                  <p className="text-ink-400 text-sm">Source: {item.source}</p>
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
