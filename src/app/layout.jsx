import { Prompt } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
 })

export const metadata = {
  title: 'ANIME HUNTER',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${prompt.className} bg-color-dark text-color-secondary`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
