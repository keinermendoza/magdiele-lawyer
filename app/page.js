import Image from 'next/image'
import styles from './page.module.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'
import PostListPreview from './components/PostListPreview'

export default function Home() {
  
  
  return (
    <main className='main'>
      {/* <Navbar links={links}/> */}
      <Hero />
      <Servicios />
      <PostListPreview limit={2} />
      <Ubicacion />
      {/* <Footer /> */}
    </main>
    )
}
