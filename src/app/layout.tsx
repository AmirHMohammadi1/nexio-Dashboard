import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/styles/tailwind.css'
import ClientLayout from './ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexio - NextJS Dashboard by A.Developer',
  description: 'Nexio - v1.0.0 based on Tailwind',
  icons: {
    icon: '/img/brand/favicon.ico',
    apple: '/img/brand/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#gggggg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        {/* <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/img/brand/apple-icon.png"
        />
        <script
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
          async
          defer
        /> */}
      </head>
      <body className={`${inter.className} text-blueGray-700 antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}