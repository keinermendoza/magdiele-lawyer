import Image from 'next/image'
import libraryBlog from '/public/images/abogada-library-blog.jpg'
// import breakLine from '/public/icons/abogada-library-blog.jpg'
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
        className="h-screen max-h-[800px] relative flex
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
                {/* <Image 
                    alt='salto de linea'
                    src={}
                /> */}
            </div>
        
        </div>
    </section>

  )
}
