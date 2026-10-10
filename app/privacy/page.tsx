import type { Metadata } from 'next';
import { company } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Privacy notice | AECAI',
  description: 'How the aecai.co.uk website and AECAI LTD handle your personal data.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-heading font-semibold text-2xl text-ink-900 mb-4">{title}</h2>
      <div className="flex flex-col gap-4 text-ink-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-white pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-ink-900 tracking-tight leading-[1.1] mb-4">
          Privacy notice for this website
        </h1>
        <p className="text-ink-500 text-sm">Last updated 10 October 2026</p>

        <Section title="Who we are">
          <p>
            {company.name} is a company registered in {company.registeredIn}, company number {company.number}. Our
            registered office is {company.registeredOffice}. We are the controller of the personal data described here.
          </p>
          <p>
            This notice covers the aecai.co.uk website and the enquiries you send us. For any question about it, email{' '}
            <a href={`mailto:${company.privacyEmail}`} className="underline hover:text-ink-900">
              {company.privacyEmail}
            </a>{' '}
            or write to the address above.
          </p>
        </Section>

        <Section title="What this website collects">
          <p>
            This website sets no cookies and uses no analytics, advertising or tracking tools. Its pages, fonts and images
            are all served from this website.
          </p>
          <p>
            Our hosting provider, Netlify, receives your IP address and the pages you request so that it can deliver the
            site, and keeps them briefly in its server logs. Netlify is based in the USA, so this data can be processed
            there.
          </p>
        </Section>

        <Section title="If you email or call us">
          <p>
            We hold your name, your email address or phone number, and whatever you tell us. We use them to reply to you
            and to follow up on your enquiry. Our lawful basis is our legitimate interest in responding to you and
            developing our business.
          </p>
          <p>Our email is provided by Zoho, from its EU data centre.</p>
          <p>We keep enquiries for 2 years after our last contact with you, then delete them.</p>
          <p>We do not sell personal data, and we do not send marketing emails.</p>
        </Section>

        <Section title="Your rights">
          <p>
            You can ask for a copy of your data, ask us to correct or delete it, restrict or object to how we use it, and
            take it elsewhere. Email{' '}
            <a href={`mailto:${company.privacyEmail}`} className="underline hover:text-ink-900">
              {company.privacyEmail}
            </a>
            . We will reply within one month.
          </p>
          <p>
            You can complain to the Information Commissioner&rsquo;s Office (ico.org.uk, 0303 123 1113). We would
            appreciate the chance to put things right first.
          </p>
        </Section>

        <Section title="Changes">
          <p>We will update this notice if what the website collects changes, and show the new date at the top.</p>
        </Section>
      </div>
    </div>
  );
}
