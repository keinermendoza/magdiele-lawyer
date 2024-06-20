import Hero from './sections/Hero'
import {Servicios} from './sections/Servicios'
import Testimonials from './sections/Testimonials'
import Contacto from './sections/Contacto'
import LastPosts from './sections/LastPosts'
import Ubicacion from './sections/Ubicacion'
import FAQ from './sections/FAQ'

// import Ubicacion from './components/Ubicacion'
import PostListPreview from './components/PostListPreview'
import Footer from './components/Footer'

export default function Home() {
  
  
  return (
<>
    <main className='main'>
      <Hero />
      <Servicios />
      <Testimonials />
      <Contacto />
      <LastPosts />
      <Ubicacion />
      <FAQ />
      {/* <PostListPreview limit={2} />
      <Ubicacion /> */}
    </main>
          {/* <Footer /> */}

</>
    )
}   
