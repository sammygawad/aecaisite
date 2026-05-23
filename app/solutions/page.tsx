'use client';

import { motion } from 'framer-motion';
import { Building2, Link2, Boxes, Users, CircleCheck as CheckCircle, Clock, PoundSterling, TrendingDown, Layers, Waves, Car, Triangle } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import SectionHeader from '@/components/ui/SectionHeader';
import CtaBand from '@/components/ui/CtaBand';
import { fadeUp } from '@/lib/animations';

const segments = [
  {
    icon: Building2,
    title: 'SME Engineering Firms',
    desc: '10–100 staff. Main inspection contractors. Currently report manually.',
    value: 'Reduce reporting time per inspection by 60–70%. Scale output without hiring.',
    benefit: 'Up to £24,000 saved per engineer per year',
  },
  {
    icon: Link2,
    title: 'Specialist Inspection Companies',
    desc: 'Link2 & infrastructure inspection specialists. High volume, tight margins.',
    value: 'Consistent outputs, junior engineer upskilling, faster turnaround.',
    benefit: 'Faster turnaround times',
  },
  {
    icon: Boxes,
    title: 'Asset Owners & Managers',
    desc: 'Local authorities, National Highways, Network Rail, housing associations.',
    value: 'Standardised data quality, long-term condition trending, audit compliance.',
    benefit: 'Audit-ready inspection records',
  },
  {
    icon: Users,
    title: 'Large Multidisciplinary Consultancies',
    desc: 'Atkins, WSP, Mott MacDonald scale. Standardised workflows, white-label needs.',
    value: 'Platform integration, branded reporting, bulk licence agreements.',
    benefit: 'White-label available',
  },
];

const structures = [
  { icon: Link2, label: 'Link2s', desc: 'Road, rail, and pedestrian bridges. Primary focus in Phase 1.', phase1: true },
  { icon: Building2, label: 'Buildings', desc: 'Structural inspections for commercial and residential buildings.', phase1: true },
  { icon: Layers, label: 'Tunnels', desc: 'Lining inspections and defect mapping for underground infrastructure.', phase1: false },
  { icon: Triangle, label: 'Retaining walls', desc: 'Condition assessment of earth retaining structures.', phase1: true },
  { icon: Car, label: 'Car parks', desc: 'Post-tensioned and RC car park deck inspections.', phase1: true },
  { icon: Waves, label: 'Marine structures', desc: 'Jetties, quay walls, and coastal infrastructure.', phase1: false },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-ink-900 min-h-[50vh] flex items-center overflow-hidden pt-16">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span custom={0} variants={fadeUp} className="inline-block text-brand text-sm font-medium tracking-widest uppercase mb-6">
              Solutions
            </motion.span>
            <motion.h1 custom={1} variants={fadeUp} className="font-heading font-bold text-5xl md:text-6xl text-white tracking-tight leading-[1.05] mb-6">
              Built for the firms that inspect Britain&rsquo;s structures.
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-ink-300 text-lg md:text-xl leading-relaxed">
              Whether you&rsquo;re a 10-person SME, a specialist bridge inspector, or a national consultancy — AECAI scales to your workflow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader
                eyebrow="Who We Serve"
                heading="Built for every scale of inspection firm."
                subtext="AECAI is priced and designed for the way UK and Ireland engineering firms actually work."
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {segments.map((seg, i) => (
                <motion.div
                  key={seg.title}
                  custom={i + 1}
                  variants={fadeUp}
                  className="border border-ink-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-brand/10 text-brand rounded-xl h-12 w-12 flex items-center justify-center mb-6">
                    <seg.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-ink-900 mb-2">{seg.title}</h3>
                  <p className="text-ink-500 text-sm mb-4">{seg.desc}</p>
                  <p className="text-ink-700 leading-relaxed mb-4">{seg.value}</p>
                  <span className="inline-block bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full">
                    {seg.benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Deep Dive */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader
                eyebrow="Return on Investment"
                heading="Real numbers from a real engineering day."
              />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Assumptions */}
              <motion.div custom={1} variants={fadeUp} className="flex flex-col gap-4">
                {[
                  { icon: PoundSterling, label: 'Average UK structural engineer day rate', value: '£55 / hour' },
                  { icon: Clock, label: 'Average inspection duration', value: '8 hours' },
                  { icon: TrendingDown, label: 'Report-writing share without AECAI', value: '70% of time' },
                  { icon: CheckCircle, label: 'Report-writing share with AECAI', value: '20% of time' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 bg-white border border-ink-200 rounded-xl p-4">
                    <div className="bg-brand/10 text-brand rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-ink-500 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-ink-900 font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Comparison Table */}
              <motion.div custom={2} variants={fadeUp}>
                <div className="bg-white border border-ink-200 rounded-2xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-ink-200">
                        <th className="text-left text-ink-500 text-xs uppercase tracking-wider font-medium px-6 py-4">Metric</th>
                        <th className="text-right text-ink-700 font-semibold px-4 py-4">Without AECAI</th>
                        <th className="text-right text-brand font-semibold px-6 py-4">With AECAI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'Report-writing hours', without: '5.6 hrs', with: '1.6 hrs' },
                        { label: 'Engineer cost per report', without: '£308', with: '£88' },
                        { label: 'Saving per inspection', without: '—', with: '£220' },
                        { label: 'Monthly saving (10 reports)', without: '—', with: '£2,000' },
                        { label: 'Annual saving', without: '—', with: '£24,000' },
                      ].map((row) => (
                        <tr key={row.label} className="border-b border-ink-100 last:border-0">
                          <td className="text-ink-700 px-6 py-3">{row.label}</td>
                          <td className="text-right text-ink-500 px-4 py-3">{row.without}</td>
                          <td className="text-right font-semibold text-brand px-6 py-3">{row.with}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Callout */}
            <motion.div custom={3} variants={fadeUp} className="mt-8 bg-brand rounded-2xl p-6 text-center">
              <p className="text-white font-heading font-semibold text-xl md:text-2xl">
                Net £24,000 saved per engineer per year — at the £200/month Professional plan.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12 text-center">
              <SectionHeader
                eyebrow="Pricing"
                heading="Simple, transparent plans."
                align="center"
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Starter */}
              <motion.div custom={1} variants={fadeUp} className="border border-ink-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <p className="text-ink-500 text-sm font-medium uppercase tracking-widest mb-2">Starter</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-heading font-bold text-4xl text-ink-900">£20</span>
                  <span className="text-ink-500 text-sm mb-1">/ report</span>
                </div>
                <p className="text-ink-500 text-sm mb-6">Pay as you go</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {['Up to 100 images per report', '8 GB storage', '2,000 LLM tokens', 'Mobile app access', 'CV defect analysis', 'Standard report generation'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-ink-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-brand flex-shrink-0" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <BrandButton href="/book-demo" variant="outline" className="w-full justify-center">
                  Book a demo
                </BrandButton>
              </motion.div>

              {/* Professional — highlighted */}
              <motion.div custom={2} variants={fadeUp} className="relative border-2 border-brand rounded-2xl p-8 shadow-lg">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </span>
                <p className="text-brand text-sm font-medium uppercase tracking-widest mb-2">Professional</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-heading font-bold text-4xl text-ink-900">£200</span>
                  <span className="text-ink-500 text-sm mb-1">/ month</span>
                </div>
                <p className="text-ink-500 text-sm mb-6">Up to 10 reports per month</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {['Everything in Starter', 'Up to 10 reports/month', 'Priority processing', 'Email support', 'Usage dashboard', 'Custom report logo'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-ink-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-brand flex-shrink-0" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <BrandButton href="/book-demo" variant="primary" className="w-full justify-center" showArrow>
                  Book a demo
                </BrandButton>
              </motion.div>

              {/* Enterprise */}
              <motion.div custom={3} variants={fadeUp} className="border border-ink-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <p className="text-ink-500 text-sm font-medium uppercase tracking-widest mb-2">Enterprise</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-heading font-bold text-4xl text-ink-900">From £2,000</span>
                </div>
                <p className="text-ink-500 text-sm mb-6">Per month — unlimited inspections</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {['Unlimited inspections', 'White-label reporting', 'Custom report templates', 'API access', 'Dedicated onboarding', 'Priority support'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-ink-700 text-sm">
                      <CheckCircle className="h-4 w-4 text-brand flex-shrink-0" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <BrandButton href="/contact" variant="secondary" className="w-full justify-center">
                  Talk to us
                </BrandButton>
              </motion.div>
            </div>

            <motion.p custom={4} variants={fadeUp} className="text-center text-ink-500 text-sm mt-8">
              All plans include GDPR-compliant data handling, engineer-in-the-loop review gate, and full audit trail.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases / Structures */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.div custom={0} variants={fadeUp} className="mb-12">
              <SectionHeader
                eyebrow="Structures Supported"
                heading="Where AECAI works."
                subtext="Concrete focus in Phase 1. Steel and masonry structures in Phase 2."
              />
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {structures.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-white border border-ink-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-brand/10 text-brand rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <s.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-heading font-semibold text-ink-900">{s.label}</h3>
                  </div>
                  <p className="text-ink-600 text-sm leading-relaxed">{s.desc}</p>
                  {!s.phase1 && (
                    <span className="inline-block mt-3 text-xs text-ink-400 border border-ink-200 rounded-full px-2 py-0.5">
                      Phase 2
                    </span>
                  )}
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
