import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader';

const font = Bricolage_Grotesque({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: 'Sunrise Advertising - Leading Outdoor Advertising Solutions',
  description: 'Sunrise Advertising offers premium outdoor advertising solutions including hoardings, pole kiosks, gantry branding, and bus shelter branding across India. Boost your brand visibility with our innovative advertising spaces.',
  keywords: 'outdoor advertising, hoardings, pole kiosks, gantry branding, bus shelter ads, India advertising, brand visibility, outdoor media',
  authors: [{ name: 'Sunrise Advertising' }],
  creator: 'Sunrise Advertising',
  publisher: 'Sunrise Advertising',
  metadataBase: new URL('https://sunrise-ads.vercel.app'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sunrise Advertising - Premium Outdoor Advertising Solutions',
    description: 'Transform your brand visibility with our premium outdoor advertising spaces including hoardings, pole kiosks, and more across India.',
    url: 'https://www.sunriseadvertising.org', // Update with your actual domain
    siteName: 'Sunrise Advertising',
    images: [
      {
        url: '/images/og-image.jpg', // Add your OG image in public/images/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Sunrise Advertising - Outdoor Media Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunrise Advertising - Premium Outdoor Advertising Solutions',
    description: 'Transform your brand visibility with our premium outdoor advertising spaces across India.',
    images: ['/images/og-image.jpg'], // Same as OG image
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest', // Add this file in your public directory
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className} bg-white dark:bg-black antialiased`}>
        <ThemeProvider
          attribute='class'
          enableSystem={true}
          defaultTheme='light'>
          <NextTopLoader color="#07be8a" />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
