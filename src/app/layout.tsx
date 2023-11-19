import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import StyledComponentsRegistry from '@/lib/registry'

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] })

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
      <body className={roboto.className}>
        <StyledComponentsRegistry>
        <Header />
        {children}
        <Footer />
        </StyledComponentsRegistry>
        </body>
    </html>
  )
}
