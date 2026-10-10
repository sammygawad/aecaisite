import './globals.css';
import type { Metadata } from 'next';
import { inter, spaceGrotesk } from '@/lib/fonts';
import ConditionalLayout from '@/components/layout/ConditionalLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://aecai.co.uk'),
  title: 'AECAI | From site photograph to signed report',
  description: 'AECAI reads an inspector\'s photographs, flags the defects and drafts the structural report for a registered engineer to check and sign. Built in Belfast.',
  openGraph: {
    title: 'AECAI | From site photograph to signed report',
    description: 'AECAI reads an inspector\'s photographs, flags the defects and drafts the structural report for a registered engineer to check and sign.',
    images: [{ url: '/Images/AECAI Logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AECAI | From site photograph to signed report',
    description: 'AECAI reads an inspector\'s photographs, flags the defects and drafts the structural report for a registered engineer to check and sign.',
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
