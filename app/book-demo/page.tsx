'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CircleCheck as CheckCircle, ChevronRight } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import { fadeUp } from '@/lib/animations';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  companySize: z.enum(['1-10', '11-50', '51-200', '200+']),
  email: z.string().email('Please enter a valid work email'),
  phone: z.string().min(1, 'Phone number is required'),
  projectDescription: z.string().min(20, 'Please describe the inspection (at least 20 characters)'),
  contactMethod: z.enum(['email', 'phone', 'either']),
});

type FormData = z.infer<typeof schema>;

const whatToExpect = [
  'A 30-minute call to understand your workflow and inspection types',
  'A free demonstration inspection on a project of your choice',
  'A sample report delivered within 5 working days',
  'A no-pressure follow-up to discuss whether AECAI fits your firm',
];

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { companySize: '11-50', contactMethod: 'either' },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero strip */}
      <section className="relative bg-ink-900 min-h-[40vh] flex items-center overflow-hidden pt-16">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span custom={0} variants={fadeUp} className="inline-block text-brand text-sm font-medium tracking-widest uppercase mb-6">
              Book a Demo
            </motion.span>
            <motion.h1 custom={1} variants={fadeUp} className="font-heading font-bold text-4xl md:text-5xl text-white tracking-tight leading-[1.05] mb-4">
              See AECAI on your own inspection.
            </motion.h1>
            <motion.p custom={2} variants={fadeUp} className="text-ink-300 text-lg leading-relaxed">
              Free, no commitment. We&rsquo;ll run a live demonstration on a real project — your data, your structures, your report templates.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-ink-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — what to expect */}
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
                  The demonstration uses your own inspection data and structure types — so you can see exactly what AECAI would produce for your practice, not a generic sample.
                </p>
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="bg-white border border-ink-200 rounded-2xl p-8 shadow-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle className="h-12 w-12 text-green-500" strokeWidth={1.5} />
                  <h2 className="font-heading font-semibold text-2xl text-ink-900">Demo requested.</h2>
                  <p className="text-ink-600">We&rsquo;ll be in touch within one working day to arrange your session.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Name <span className="text-brand">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        {...register('name')}
                        className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                        placeholder="Jane Smith"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Company <span className="text-brand">*</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        {...register('company')}
                        className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                        placeholder="Acme Structures Ltd"
                      />
                      {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Job title <span className="text-brand">*</span>
                      </label>
                      <input
                        id="jobTitle"
                        type="text"
                        {...register('jobTitle')}
                        className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                        placeholder="Principal Engineer"
                      />
                      {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Company size <span className="text-brand">*</span>
                      </label>
                      <select
                        id="companySize"
                        {...register('companySize')}
                        className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors bg-white"
                      >
                        <option value="1-10">1–10 staff</option>
                        <option value="11-50">11–50 staff</option>
                        <option value="51-200">51–200 staff</option>
                        <option value="200+">200+ staff</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Work email <span className="text-brand">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register('email')}
                        className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                        placeholder="jane@acmestructures.co.uk"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-ink-700 mb-1.5">
                        Phone <span className="text-brand">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        {...register('phone')}
                        className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                        placeholder="+44 7700 900000"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-ink-700 mb-1.5">
                      Tell us about a typical inspection you&rsquo;d like to demo <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      rows={4}
                      {...register('projectDescription')}
                      className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors resize-none"
                      placeholder="e.g. Medium principal inspection of a 3-span concrete bridge on a rural A-road. Approximately 200 photos, full BD 63 report required."
                    />
                    {errors.projectDescription && <p className="text-red-500 text-xs mt-1">{errors.projectDescription.message}</p>}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-ink-700 mb-2">Preferred contact method</p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: 'email', label: 'Email' },
                        { value: 'phone', label: 'Phone call' },
                        { value: 'either', label: 'Either' },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            value={opt.value}
                            {...register('contactMethod')}
                            className="accent-brand w-4 h-4"
                          />
                          <span className="text-sm text-ink-700">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <BrandButton type="submit" disabled={isSubmitting} variant="primary" className="w-full justify-center mt-2" showArrow>
                    {isSubmitting ? 'Submitting...' : 'Request demo'}
                  </BrandButton>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
