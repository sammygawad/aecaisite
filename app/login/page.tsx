'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BrandButton from '@/components/ui/BrandButton';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    setError('');
    await new Promise((r) => setTimeout(r, 500));
    router.push('/portal');
  };

  return (
    <div className="min-h-screen bg-ink-50 flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="bg-white border border-ink-200 rounded-2xl p-10 shadow-sm w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded">
            <Image
              src="/Images/AECAI Logo.png"
              alt="AECAI"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        <h1 className="font-heading font-semibold text-3xl text-ink-900 text-center mb-1">
          Welcome back.
        </h1>
        <p className="text-ink-500 text-sm text-center mb-8">Sign in to the AECAI portal.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ink-700 mb-1.5">
              Email address
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
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-ink-700">
                Password
              </label>
              <a href="#" className="text-xs text-brand hover:text-brand-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register('password')}
              className="w-full border border-ink-200 rounded-lg px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <BrandButton type="submit" disabled={isSubmitting} variant="primary" className="w-full justify-center mt-1">
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </BrandButton>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-ink-200" />
          <span className="text-ink-400 text-xs uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-ink-200" />
        </div>

        {/* OAuth placeholders */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-ink-200 rounded-full px-4 py-2.5 text-sm font-medium text-ink-700 hover:border-ink-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <path d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.4a4.63 4.63 0 01-2 3.04v2.52h3.22c1.88-1.73 2.97-4.28 2.97-7.39z" fill="#4285F4" />
              <path d="M12 22c2.7 0 4.97-.9 6.62-2.43l-3.22-2.52c-.9.6-2.04.96-3.4.96-2.62 0-4.84-1.77-5.63-4.15H3.04v2.6A9.99 9.99 0 0012 22z" fill="#34A853" />
              <path d="M6.37 13.86A6 6 0 016 12a6 6 0 01.37-1.86v-2.6H3.04A10 10 0 002 12c0 1.61.38 3.14 1.04 4.46l3.33-2.6z" fill="#FBBC05" />
              <path d="M12 5.99c1.47 0 2.8.51 3.84 1.5l2.87-2.87C16.97 3.1 14.7 2 12 2A9.99 9.99 0 003.04 7.54l3.33 2.6C7.16 7.76 9.38 5.99 12 5.99z" fill="#EA4335" />
            </svg>
            Sign in with Google
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-ink-200 rounded-full px-4 py-2.5 text-sm font-medium text-ink-700 hover:border-ink-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0078D4">
              <path d="M11.4 24A11.4 11.4 0 1011.4 1.2 11.4 11.4 0 0011.4 24z" />
              <path d="M15.2 16.2H8.8l-1.4-1.4V9.2l1.4-1.4h6.4l1.4 1.4v5.6l-1.4 1.4z" fill="white" />
            </svg>
            Sign in with Microsoft
          </button>
        </div>

        <p className="text-center text-sm text-ink-500 mt-8">
          Don&rsquo;t have an account?{' '}
          <Link href="/signup" className="text-brand hover:text-brand-600 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
