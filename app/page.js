import Hero from './components/Hero'
import {Servicios} from './components/Servicios'
import Testimonials from './components/Testimonials'
import Ubicacion from './components/Ubicacion'
import PostListPreview from './components/PostListPreview'
import Footer from './components/Footer'

export default function Home() {
  
  
  return (
<>
    <main className='main'>
      <Hero />
      <Servicios />
      <Testimonials />
      {/* <PostListPreview limit={2} />
      <Ubicacion /> */}
    </main>
          {/* <Footer /> */}

</>
    )
}   
