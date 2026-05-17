import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: 'Auqira | AI Workflow Audit — Fixed Price, 7 Days',
  description: 'Find exactly where AI saves your team the most time. A fixed-scope AI Workflow Audit for service businesses — delivered in 7 days with ROI projections, tool recommendations, and a 90-day implementation roadmap.',
  metadataBase: new URL('https://auqira.com'),
  alternates: { canonical: '/' },
  keywords: [
    'AI workflow audit',
    'recruitment agency AI',
    'real estate AI tools',
    'marketing agency AI',
    'AI workflow automation',
    'AI consulting for small business',
    'AI productivity tools',
    'business AI strategy',
    'fixed price AI audit',
    'AI ROI calculator',
  ],
  authors: [{ name: 'Soham Singh', url: 'https://auqira.com' }],
  creator: 'Auqira',
  publisher: 'Auqira',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://auqira.com',
    siteName: 'Auqira',
    title: 'Auqira | AI Workflow Audit — Fixed Price, 7 Days',
    description: 'Find exactly where AI saves your team the most time. A fixed-scope AI Workflow Audit for service businesses — delivered in 7 days with ROI projections, tool recommendations, and a 90-day implementation roadmap.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Auqira – AI Workflow Audit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auqira | AI Workflow Audit — Fixed Price, 7 Days',
    description: 'Find exactly where AI saves your team the most time. A fixed-scope AI Workflow Audit for service businesses — delivered in 7 days with ROI projections, tool recommendations, and a 90-day implementation roadmap.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} bg-ivory scroll-smooth`}>
      <body className="font-sans antialiased bg-ivory text-obsidian">
        <StructuredData />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
