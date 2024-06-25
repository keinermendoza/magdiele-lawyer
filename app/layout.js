import './globals.css'
import { inika } from './styles/fonts'
import Footer from './sections/Footer'
export const metadata = {
  title: 'Abogada Magdiele',
  description: 'Abogada en Caracas, profesional en el area Mercantil y Civil.',
  author: 'Keiner Mendoza, para mas informacion visitar https://keinermendoza.com',
  metadataBase: new URL('https://abogadamagdiele.com'),
}

// export const dynamic = 'force-dynamic'
export const revalidate = 600

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inika.className}>
          {children}
          <Footer />
        </body>
    </html>
  )
}
