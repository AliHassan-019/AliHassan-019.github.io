import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ali Hassan - Embedded Systems Engineer',
  description: 'Professional portfolio showcasing embedded systems engineering expertise, projects, and experience in firmware development, hardware design, and real-time systems.',
  keywords: ['Embedded Systems', 'Firmware Development', 'Hardware Design', 'RTOS', 'IoT', 'Microcontrollers'],
  authors: [{ name: 'Ali Hassan' }],
  openGraph: {
    title: 'Ali Hassan - Embedded Systems Engineer',
    description: 'Professional portfolio showcasing embedded systems engineering expertise and projects',
    url: 'https://your-domain.com',
    siteName: 'Ali Hassan Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Hassan - Embedded Systems Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Hassan - Embedded Systems Engineer',
    description: 'Professional portfolio showcasing embedded systems engineering expertise and projects',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1f2937" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="fixed inset-0 bg-white dark:bg-gray-900 transition-colors duration-300" />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
} 