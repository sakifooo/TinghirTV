import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tinghir TV',
  description: 'Download Tinghir TV to watch live football matches, highlights, and sports news anywhere, anytime.  
حمّل تطبيق Tinghir TV لمشاهدة مباريات كرة القدم مباشرة، وأهداف المباريات، وآخر الأخبار الرياضية في أي وقت ومن أي مكان.',
  applicationName: 'Tinghir TV',
 keywords: [
   'tinghir tv',
    'kora live',
    'بث مباشر',
    'مباريات اليوم',
    'نتائج المباريات',
    'الدوري الإسباني',
    'الدوري الإيطالي',
    'الدوري السعودي',
    'دوري أبطال أوروبا',
    'live football',
  ], // ← هادي كانت ناقصة

   metadataBase: new URL('https://tinghir-tv.vercel.app'),
 verification: {
    google: 'VzK0Ce6V01Jr_8MvkE_i_rwtYftEtrnNdtl5KY1cIdQ',
  },
  robots: {
  index: true,
  follow: true,
},
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'tinghir tv',
    description: 'تابع مباريات اليوم بث مباشر.',
    url: 'https://tinghir-tv.vercel.app',
    siteName: 'tinghir tv',
    locale: 'ar_MA',
    type: 'website',
      images: [
    {
      url: '/TinghirTV.png',
      width: 1024,
      height: 1024,
      alt: 'tinghir tv',
    },
  ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'tinghir tv',
    description: 'تابع مباريات اليوم بث مباشر.',
  },
  
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23ff1a44" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20M2 12h20m-3-7-14 14m0-14 14 14"/></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
