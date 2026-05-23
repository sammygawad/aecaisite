import './globals.css';
import type { Metadata } from 'next';
import { inter, spaceGrotesk } from '@/lib/fonts';
import ConditionalLayout from '@/components/layout/ConditionalLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://aecai.co.uk'),
  title: 'AECAI — AI-Powered Structural Inspection Platform',
  description: 'AECAI is an end-to-end AI platform for structural engineers — capturing field data, detecting concrete defects with computer vision, and generating professional inspection reports. Built for the UK and Ireland.',
  openGraph: {
    title: 'AECAI — AI-Powered Structural Inspection Platform',
    description: 'AI-powered structural inspection, defect detection, and automated report generation for UK and Ireland engineering firms.',
    images: [{ url: '/Images/AECAI Logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AECAI — AI-Powered Structural Inspection Platform',
    description: 'AI-powered structural inspection, defect detection, and automated report generation for UK and Ireland engineering firms.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
