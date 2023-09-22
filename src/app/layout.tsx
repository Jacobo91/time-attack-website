
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

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
      </body>
    </html>
  )
}
