import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Layout } from '@/layout';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'], // puedes ajustar los pesos según necesites
});

export const metadata = {
  title: 'Simple | CoolCoode — Minimal landing page ready to use',
  description:
    'Simple is a modern, minimal landing page built by CoolCoode. Perfect for showcasing SaaS products, startups, or digital services with a clean and adaptable design.',
  keywords: [
    'CoolCoode',
    'Simple landing',
    'minimal landing page',
    'SaaS template',
    'startup landing',
    'modern landing',
    'Next.js',
    'TailwindCSS',
  ],
  openGraph: {
    title: 'Simple — Minimal landing page by CoolCoode',
    description:
      'A modern and elegant landing page for your digital product. Customize it in minutes and make your online presence stand out.',
    url: 'https://coolcoode.com',
    siteName: 'CoolCoode',
    images: [
      {
        url: 'https://coolcoode.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Simple — Minimal landing page by CoolCoode',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple | CoolCoode',
    description: 'A minimal and modern landing page ready to customize and deploy in minutes.',
    images: ['https://coolcoode.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${roboto.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
