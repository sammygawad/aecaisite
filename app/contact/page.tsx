'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Linkedin, MapPin, CircleCheck as CheckCircle } from 'lucide-react';
import BrandButton from '@/components/ui/BrandButton';
import { fadeUp } from '@/lib/animations';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please provide a brief message (at least 10 characters)'),
  preference: z.enum(['email', 'call', 'demo']),
});

type FormData = z.infer<typeof schema>;

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'info@aecai.co.uk', href: 'mailto:info@aecai.co.uk' },
  { icon: Phone, label: 'Phone', value: '+44 7477 596 226', href: 'tel:+447477596226' },
  { icon: Linkedin, label: 'LinkedIn', value: 'AECAI on LinkedIn', href: '#' },
  { icon: MapPin, label: 'Address', value: 'United Kingdom', href: null },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { preference: 'email' },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-white pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — info */}
            <motion.div initial="hidden" animate="visible">
              <motion.span custom={0} variants={fadeUp} className="inline-block text-brand text-sm font-medium tracking-widest uppercase mb-4">
                Get in Touch
              </motion.span>
              <motion.h1 custom={1} variants={fadeUp} className="font-heading font-bold text-5xl text-ink-900 tracking-tight leading-[1.05] mb-6">
                Talk to AECAI.
              </motion.h1>
              <motion.p custom={2} variants={fadeUp} className="text-ink-600 text-lg leading-relaxed mb-10">
                Whether you have a quick question, want to discuss your firm&rsquo;s inspection workload, or are ready to see the platform in action — we&rsquo;d love to hear from you.
              </motion.p>

              <motion.div custom={3} variants={fadeUp} className="flex flex-col gap-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 border border-ink-200 rounded-xl p-4">
                    <div className="bg-brand/10 text-brand rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-ink-400 text-xs uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-ink-900 font-medium hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded">
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

            {/* Right — form */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="border border-ink-200 rounded-2xl p-8 bg-white shadow-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle className="h-12 w-12 text-green-500" strokeWidth={1.5} />
                  <h2 className="font-heading font-semibold text-2xl text-ink-900">Message sent.</h2>
                  <p className="text-ink-600">Thanks — we&rsquo;ll be in touch within one working day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
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

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-1.5">
                      Email <span className="text-brand">*</span>
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
                      Phone <span className="text-ink-400 text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      {...register('phone')}
                      className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                      placeholder="+44 7700 900000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink-700 mb-1.5">
                      How can we help? <span className="text-brand">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message')}
                      className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your inspection workload or question..."
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-ink-700 mb-2">I&rsquo;d prefer:</p>
                    <div className="flex flex-col gap-2">
                      {[
                        { value: 'email', label: 'Email reply' },
                        { value: 'call', label: 'Schedule a call' },
                        { value: 'demo', label: 'Book a demo' },
                      ].map((opt) => (
                        <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="radio"
                            value={opt.value}
                            {...register('preference')}
                            className="accent-brand w-4 h-4"
                          />
                          <span className="text-sm text-ink-700">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <BrandButton type="submit" disabled={isSubmitting} variant="primary" className="w-full justify-center mt-2">
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </BrandButton>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
