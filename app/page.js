import Hero from './sections/Hero'
import {Servicios} from './sections/Servicios'
import Testimonials from './sections/Testimonials'
import Contacto from './sections/Contacto'
import LastPosts from './sections/LastPosts'
import Ubicacion from './sections/Ubicacion'
import FAQ from './sections/FAQ'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'


export default function Home() {
  
  
  return (
<>
    <Navbar />
    <main className='main'>
      <Hero />
      <Servicios />
      <Testimonials />
      <Contacto />
      <LastPosts />
      <Ubicacion />
      <FAQ />
    </main>

</>
    )
}   
