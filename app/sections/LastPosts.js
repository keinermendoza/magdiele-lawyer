import Image from 'next/image'
import libraryBlog from '/public/images/abogada-library-blog.jpg'
import breakLine from '/public/icons/break-line.svg'
import Link from 'next/link'
import PostCard from '../components/PostCard'
// import { lastetsPosts } from '../lib/place-holder-data'
import { fetchLatestPost } from '../lib/services'

function Background() {
    return (
      <Image
        alt="Biblioteca de Jurista"
        src={libraryBlog}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'bottom right'
        }}
      />
    )
  }

export default async function LastPosts() {
  const {latetsPosts, error} = await fetchLatestPost()
  
  return (
    <section 
        id="ultimas-publicaciones"
        className="relative flex
        after:content-['']
        after:absolute after:top-0 after:left-0
        after:w-full after:h-full
        after:bg-c-blue-65
        " 
        >
        <Background/>
        <div className='relative z-10 max-w-[85rem] w-full mx-auto  px-4 md:px-6 lg:px-8 py-16 lg:py-24'>
            <div className="text-center flex flex-col items-center gap-10 mb-16 text-c-gold-primary">
                <h2 className='text-3xl lg:text-4xl'>La Abogada Responde</h2>
                <p className='p-3 rounded-md text-xl lg:text-2xl max-w-sm mx-auto bg-c-brown-transparent'>Ultimas publicaciones de la Abogada Magdiele</p>
                <Image 
                    alt='salto de linea'
                    src={breakLine}
                />
            </div>

            <div 
              id="container-last-posts-cards"
              className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'
              > 
              {latetsPosts &&
                latetsPosts?.map(post => (
                  <PostCard 
                    key={post.id}
                    title={post.title}
                    text={post.short_body}
                    datePublished={post.updated}
                    topics={post.topics}
                    imageUrl={post.image}
                    slug={post.slug}
                />
                  
                ))
              }
              
              
            </div>
            {error && 
            <div className='w-full text-white text-center text-xl'>
              <p>Estamos experimentando problemas en nuestros servidores y no ha sido posible cargar las publicaciones</p>
            </div>
            }

            {!error &&
            <div className='mt-10 flex justify-center'>
              <Link 
                href="blog/" 
              className='w-fit flex items-center lg:gap-5 gap-3 text-2xl lg:text-3xl py-2 px-4 lg:py-3 lg:px-6 rounded-md bg-c-gold-primary text-c-brown-primary
              transition-all outline-offset-4 outline-transparent hover:outline hover:outline-2 hover:scale-105 
               hover:outline-c-gold-primary'>   
                <svg className='h-6 w-6 lg:h-8 lg:w-8' width="31" height="39" viewBox="0 0 31 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.25 38.25C3.21875 38.25 2.33625 37.8831 1.6025 37.1494C0.86875 36.4156 0.50125 35.5325 0.5 34.5V4.5C0.5 3.46875 0.8675 2.58625 1.6025 1.8525C2.3375 1.11875 3.22 0.75125 4.25 0.75H26.75C27.7812 0.75 28.6644 1.1175 29.3994 1.8525C30.1344 2.5875 30.5012 3.47 30.5 4.5V34.5C30.5 35.5312 30.1331 36.4144 29.3994 37.1494C28.6656 37.8844 27.7825 38.2513 26.75 38.25H4.25ZM13.625 17.625L18.3125 14.8125L23 17.625V4.5H13.625V17.625Z" fill="#2F2204"/>
                </svg>
                  
                  <span>Todas las Publicaciones</span>
              </Link>
            </div>}

        </div>
    </section>

  )
}
