import Image from 'next/image'
import libraryBlog from '/public/images/abogada-library-blog.jpg'
import postBook from '/public/icons/post-book.svg'
import breakLine from '/public/icons/break-line.svg'

import PostCard from '../components/PostCard'
import { lastetsPosts } from '../lib/place-holder-data'

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

export default function LastPosts() {
  return (
    <section 
        id="home"
        className="relative flex
        after:content-['']
        after:absolute after:top-0 after:left-0
        after:w-full after:h-full
        after:bg-c-blue-65
        " 
        >
        <Background/>
        <div className='relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8'>
            <div className="w-full max-w-lg mx-auto text-center flex flex-col gap-5">
                <h2 className='text-4xl'>La Abogada Responde</h2>
                <p className='p-3 rounded-md bg-c-brown-transparent'>Ultimas publicaciones de la Abogada Magdiele</p>
                <Image 
                    alt='salto de linea'
                    src={breakLine}
                />
            </div>

            <div 
              id="container-last-posts-cards"
              className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'
              > 
              {
                lastetsPosts.map(post => (
                  <PostCard 
                    id={post.id}
                    title={post.title}
                    imageUrl={post.image_url}
                    datePublished={post.date_published}
                    text={post.text}
                    topics={post.temas} 
                  />
                  
                ))
              }

            </div>

            <div className='mt-5 flex justify-center'>
              <a href="#whatsapp-link"
              className='w-fit text-3xl flex items-center gap-5 py-3 px-6 rounded-md bg-c-gold-primary text-c-brown-primary'
              >   
                  <Image 
                    src={postBook}
                    alt='book icon'
                    width={30}
                    height={38}
                  />

                  <span>Contactame</span>
              </a>
            </div>
        </div>
    </section>

  )
}
