import type { Metadata, Viewport } from 'next';
import { Chivo, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import '../index.css';

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'BiztelAI - The AI Decision Layer for Manufacturing',
  description: 'Turn factory data and operational reality into intelligence for the people who run the plant.',
  openGraph: {
    title: 'BiztelAI - The AI Decision Layer for Manufacturing',
    description: 'Turn factory data and operational reality into intelligence for the people who run the plant.',
    type: 'website',
  },
};

export const viewport: Viewport = { themeColor: '#0A0F18' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${plex.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
