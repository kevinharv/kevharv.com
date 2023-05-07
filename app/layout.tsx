import './globals.css'
import { Roboto_Serif } from 'next/font/google'

const Roboto = Roboto_Serif({ subsets: ['latin'] })

export const metadata = {
  title: "Kevin's Site",
  description: "Kevin Harvey's Personal Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
