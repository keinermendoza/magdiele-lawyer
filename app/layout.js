import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { TokenProvider } from './context/TokenContext'
const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Abogada Magdiele',
  description: 'Abogada en Caracas, profesional en el area Mercantil y Civil.',
  author: 'Keiner Mendoza, para mas informacion visitar keinermendoza.pythonanywhere.com',
  openGraph: {
    title: 'Abogada Magdiele',
    description: 'Abogada en Caracas, profesional en el area Mercantil y Civil.',
  },

}

const links = [
  {
    label: 'Home',
    url : '/#home'
  }, {
    label: 'Servicios',
    url: '/#servicios'
  }, {
    label:'Ubicacion',
    url: '/#ubicacion'
  },
  {
    label: 'Blog',
    url: '/blog'
  },
]
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <TokenProvider>
          <Navbar links={links} />
          {children}
          <Footer />
        </TokenProvider>
        </body>
    </html>
  )
}
