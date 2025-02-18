import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arqila Surya Putra Portfolio',
  description: 'My first portfolio, showcasing my works and skills.',
  icons: {
    icon: '/bear.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
