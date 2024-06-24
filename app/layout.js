import './globals.css'
import { inika } from './styles/fonts'
import Footer from './sections/Footer'
export const metadata = {
  title: 'Abogada Magdiele',
  description: 'Abogada en Caracas, profesional en el area Mercantil y Civil.',
  author: 'Keiner Mendoza, para mas informacion visitar https://keinermendoza.com',
  openGraph: {
    title: 'Abogada Magdiele',
    description: 'Abogada en Caracas, profesional en el area Mercantil y Civil.',
    images: ['/public/images/abogada_preview.png']
  },

}


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
