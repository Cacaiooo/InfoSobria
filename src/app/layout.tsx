import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import StyledComponentsRegistry from '@/lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Info Sobria',
  description: 'Será que você pode misturar?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
        <Header />
        {children}
        <Footer />
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
