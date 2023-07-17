import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata={
  title:"Create next app",
  description:"Generated using nextjs"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
