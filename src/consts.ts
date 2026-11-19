// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Aaron Chyi';
export const SITE_DESCRIPTION = 'The academic profile of Aaron Chyi.';

export const CV_URL = '';

export const CONTACT = {
  organization: 'Aaron',
  addressLines: [
    'M.S. in Computer Science',
    'The University of Texas at Austin',
  ],
  emails: [
    'aaronchyi47@gmail.com'
  ],
};

export type SocialIcon = 'website' | 'scholar' | 'email' | 'github' | 'linkedin' | 'twitter';

export const SOCIAL_LINKS: ReadonlyArray<{
  label: string;
  href: string;
  icon: SocialIcon;
}> = [
  {
    label: 'GitHub',
    href: 'https://github.com/Aaron-sg-qi',
    icon: 'github',
  },
  {
    label: 'Email',
    href: 'mailto:aaronchyi47@gmail.com',
    icon: 'email',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aura-fin-7b774632a/',
    icon: 'linkedin',
  },
  {
    label: 'X',
    href: 'https://x.com/AuraFintech',
    icon: 'twitter',
  },
];

export const FOOTER_CREDIT = {
  designerName: 'Shravan Goswami',
  designerUrl: 'https://shravangoswami.com',
  sourceLabel: 'Open Source',
  sourceUrl: 'https://github.com/Aaron-sg-qi',
};

// Umami analytics — configured via environment variables so no tracking ID is
// committed. Set PUBLIC_UMAMI_WEBSITE_ID (e.g. in a .env file or a CI variable)
// to enable it; leave it unset to disable analytics entirely.
export const UMAMI_SRC = import.meta.env.PUBLIC_UMAMI_SRC ?? 'https://cloud.umami.is/script.js';
export const UMAMI_WEBSITE_ID = import.meta.env.PUBLIC_UMAMI_WEBSITE_ID ?? '';
