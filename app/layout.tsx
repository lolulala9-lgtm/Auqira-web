import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: 'Auqira | AI Workflow Audit for Recruitment Agencies',
  description: 'Discover exactly where AI can save your recruitment agency 10–20 hours per recruiter weekly. Fixed-price audit delivered in 7 days with ROI projections, tool recommendations, and a 90-day implementation roadmap.',
  metadataBase: new URL('https://auqira.com'),
  alternates: { canonical: '/' },
  keywords: [
    'AI audit',
    'recruitment agency AI',
    'workflow automation',
    'AI consulting',
    'recruitment technology',
    'AI workflow audit',
    'recruitment automation',
    'AI for recruiters',
    'staffing firm AI',
    'recruitment agency consulting',
  ],
  authors: [{ name: 'Soham Singh', url: 'https://auqira.com' }],
  creator: 'Auqira',
  publisher: 'Auqira',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://auqira.com',
    siteName: 'Auqira',
    title: 'Auqira | AI Workflow Audit for Recruitment Agencies',
    description: 'Fixed-price AI audit for recruitment agencies. Discover where AI saves 10–20 hours per recruiter weekly. Delivered in 7 days with ROI projections and a 90-day roadmap. $1,500 founding rate.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Auqira – AI Workflow Audit for Recruitment Agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auqira | AI Workflow Audit for Recruitment Agencies',
    description: 'Fixed-price AI audit for recruitment agencies. Delivered in 7 days with ROI projections. $1,500 founding rate.',
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
