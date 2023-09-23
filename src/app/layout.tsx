
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Time Attack',
  description: 'Tramo  Av las palmas desde el zarzal hasta el viva palmas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  function menuTracker() {

  }

  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
      <Navbar />
      {children}
      <Footer/>
      <Script src="https://kit.fontawesome.com/37b2f718fc.js" strategy='lazyOnload' ></Script>
      </body>
    </html>
  )
}
