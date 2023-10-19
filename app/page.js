import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Ubicacion from './components/Ubicacion'
import PostListPreview from './components/PostListPreview'

export default function Home() {
  
  
  return (
    <main className='main'>
      <Hero />
      <Servicios />
      <PostListPreview limit={2} />
      <Ubicacion />
    </main>
    )
}
