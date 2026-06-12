import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Proefles',
      links: [
        {
          text: 'Proefles',
          href: getPermalink('/#proefles'),
        },
        {
          text: 'Lestijden',
          href: getPermalink('/p/lestijden'),
        },
        {
          text: 'Locatie Arnhem',
          href: getPermalink('/p/locatie-arnhem'),
        },
        {
          text: 'Locatie Wageningen',
          href: getPermalink('/p/locatie-wageningen'),
        },
        {
          text: 'Leraren',
          href: getPermalink('/p/leraren'),
        },
      ],
    },
    {
      text: 'Aanmelden',
      links: [
        {
          text: 'Aanmelden',
          href: getPermalink('/aanmelden'),
        },
        {
          text: 'Lesgeld',
          href: getPermalink('/aanmelden#lesgeld'),
        },
        {
          text: 'Inschrijven',
          href: getPermalink('/landing/inschrijven'),
        },
      ],
    },
    {
      text: 'Blogs',
      href: getBlogPermalink(),
      //links: [
      // {
      //   text: 'Blog List',
      //   href: getBlogPermalink(),
      // },
      // {
      //   text: 'Article',
      //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      // },
      // {
      //   text: 'Article (with MDX)',
      //   href: getPermalink('markdown-elements-demo-post', 'post'),
      // },
      // {
      //   text: 'Category Page',
      //   href: getPermalink('tutorials', 'category'),
      // },
      // {
      //   text: 'Aikido blogs',

      // },
      //],
    },
    {
      text: 'Ledeninfo',
      links: [
        {
          text: 'Ledennieuws',
          href: getPermalink('/p/ledennieuws'),
        },
        {
          text: 'Kalender',
          href: getPermalink('/p/kalender'),
        },
        {
          text: 'Kalender full screen',
          href: 'https://www.google.com/calendar/embed?showTitle=0&hl=nl&height=600&wkst=2&bgcolor=%23FFFFFF&src=aikidoarnhem%40gmail.com&color=%232952A3&src=arn6ku55bk2ruab49tqtioeb6s%40group.calendar.google.com&color=%23125A12&ctz=Europe%2FAmsterdam',
        },
        {
          text: 'Discussiegroep',
          href: 'https://groups.google.com/g/aikidoarnhem',
        },
        {
          text: 'Kyu en Dangraad eisen',
          href: getPermalink('/p/vereisten'),
        },
        {
          text: 'Leraren',
          href: getPermalink('/p/leraren'),
        },
        {
          text: 'Lesgeld',
          href: getPermalink('/aanmelden#lesgeld'),
        },
        {
          text: 'Lestijden',
          href: getPermalink('/p/lestijden'),
        },
        {
          text: 'Locatie Arnhem',
          href: getPermalink('/p/locatie-arnhem'),
        },
        {
          text: 'Locatie Wageningen',
          href: getPermalink('/p/locatie-wageningen'),
        },
        {
          text: 'Wijzigingsformulier',
          href: getPermalink('/landing/inschrijven'),
        },
        {
          text: 'Opzegformulier',
          href: getPermalink('/landing/opzeggen'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    {
      text: 'Links',
      href: '/links',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {},
    {
      links: [{ text: 'Vertrouwenspersoon', href: '/vertrouwenspersoon' }],
    },
    {
      links: [
        { text: 'Samenvatting', href: '/samenvatting' },
        { text: 'Summary', href: '/summary' },
      ],
    },
    {
      title: 'Stichting',
      links: [
        { text: 'Missie', href: '/missie' },
        { text: 'AVG', href: '/privacy' },
        { text: 'Contact', href: '/contact' },
        { text: 'Licenties', href: '/licences' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Missie', href: getPermalink('/missie') },
    { text: 'AVG Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Google groups',
      icon: 'tabler:brand-google',
      href: 'https://groups.google.com/g/aikidoarnhem',
    },
    //    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: 'Stichting Sankaku - alle rechten voorbehouden',
};

// English navigation. Hrefs point at the /en/... equivalents (same slug paths,
// prefixed with /en). Many of these target pages are not translated yet, so
// some links are broken for now.
export const headerDataEn = {
  links: [
    {
      text: 'Trial class',
      links: [
        {
          text: 'Trial class',
          href: '/en#proefles',
        },
        {
          text: 'Class times',
          href: '/en/p/lestijden',
        },
        {
          text: 'Location Arnhem',
          href: '/en/p/locatie-arnhem',
        },
        {
          text: 'Location Wageningen',
          href: '/en/p/locatie-wageningen',
        },
        {
          text: 'Teachers',
          href: '/en/p/leraren',
        },
      ],
    },
    {
      text: 'Sign up',
      links: [
        {
          text: 'Sign up',
          href: '/en/aanmelden',
        },
        {
          text: 'Fees',
          href: '/en/aanmelden#lesgeld',
        },
        {
          text: 'Registration',
          href: '/en/landing/inschrijven',
        },
      ],
    },
    {
      text: 'Blog',
      href: '/en/blogs',
    },
    {
      text: 'Member info',
      links: [
        {
          text: 'Member news',
          href: '/en/p/ledennieuws',
        },
        {
          text: 'Calendar',
          href: '/en/p/kalender',
        },
        {
          text: 'Calendar full screen',
          href: 'https://www.google.com/calendar/embed?showTitle=0&hl=en&height=600&wkst=2&bgcolor=%23FFFFFF&src=aikidoarnhem%40gmail.com&color=%232952A3&src=arn6ku55bk2ruab49tqtioeb6s%40group.calendar.google.com&color=%23125A12&ctz=Europe%2FAmsterdam',
        },
        {
          text: 'Discussion group',
          href: 'https://groups.google.com/g/aikidoarnhem',
        },
        {
          text: 'Kyu and Dan grade requirements',
          href: '/en/p/vereisten',
        },
        {
          text: 'Teachers',
          href: '/en/p/leraren',
        },
        {
          text: 'Fees',
          href: '/en/aanmelden#lesgeld',
        },
        {
          text: 'Class times',
          href: '/en/p/lestijden',
        },
        {
          text: 'Location Arnhem',
          href: '/en/p/locatie-arnhem',
        },
        {
          text: 'Location Wageningen',
          href: '/en/p/locatie-wageningen',
        },
        {
          text: 'Change form',
          href: '/en/landing/inschrijven',
        },
        {
          text: 'Cancellation form',
          href: '/en/landing/opzeggen',
        },
      ],
    },
    {
      text: 'Contact',
      href: '/en/contact',
    },
    {
      text: 'Links',
      href: '/en/links',
    },
  ],
  actions: [],
};

export const footerDataEn = {
  links: [
    {},
    {
      links: [{ text: 'Confidential adviser', href: '/en/vertrouwenspersoon' }],
    },
    {
      links: [
        { text: 'Samenvatting', href: '/samenvatting' },
        { text: 'Summary', href: '/summary' },
      ],
    },
    {
      title: 'Foundation',
      links: [
        { text: 'Mission', href: '/en/missie' },
        { text: 'GDPR', href: '/en/privacy' },
        { text: 'Contact', href: '/en/contact' },
        { text: 'Licences', href: '/en/licences' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Mission', href: '/en/missie' },
    { text: 'GDPR Policy', href: '/en/privacy' },
  ],
  socialLinks: [
    {
      ariaLabel: 'Google groups',
      icon: 'tabler:brand-google',
      href: 'https://groups.google.com/g/aikidoarnhem',
    },
  ],
  footNote: 'Stichting Sankaku - all rights reserved',
};
