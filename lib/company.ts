// Company details shown on the site. Registered office as filed at Companies House (checked 10 Oct 2026).
export const company = {
  name: 'AECAI LTD',
  number: 'NI736281',
  registeredIn: 'Northern Ireland',
  registeredOffice: '13 Belvoir Drive, Belfast, Northern Ireland, BT8 7BA',
  email: 'info@aecai.co.uk',
  privacyEmail: 'privacy@aecai.co.uk',
  phoneDisplay: '+44 7477 596 226',
  phoneHref: 'tel:+447477596226',
};

export function mailto(subject: string, body?: string) {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${company.email}?${params.join('&')}`;
}
