import Menu from '../components/molecules/Menu'
import './styles/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diego Queiroz',
  description: 'Portfólio Diego Queiroz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <main>
          <Menu />
          {children}
        </main>
      </body>
    </html>
  )
}
