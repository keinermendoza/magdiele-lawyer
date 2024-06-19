
import Image from 'next/image'

import saludo from '/public/saludo-negocios.jpg'
import abogada from '/public/abogada-blob-transition-ready.svg'
import { FaWhatsapp } from 'react-icons/fa6'
 
function Background() {
  return (
    <Image
      alt="Saludo de negocios"
      src={saludo}
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

export default function Hero() {
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
            <div 
                className='relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8
                flex justify-between items-center gap-5
            '>

                <div className='flex flex-col gap-5 text-c-gold-shine'>
                    <h1 className=" uppercase text-5xl">
                        Abogada<br />
                        Magdiele Mendoza
                    </h1>
                    <div className="text-2xl max-w-md 
                        p-5 rounded-md bg-c-brown-transparent
                        border-solid border-c-gold-shine border-2">
                        <p>
                            Profesional del Derecho Civil y Mercantil con más de 20 años
                            de experiencia, una enorme vocación por la profesión 
                            y con una destacada capacidad para atender a sus clientes.
                        </p>
                    </div>

                    <div className='mt-10'>
                        <a href="#whatsapp-link"
                        className='w-fit text-3xl flex items-center gap-5 py-3 px-6 rounded-md bg-c-gold-primary text-c-brown-primary'
                        >   
                            <FaWhatsapp></FaWhatsapp>
                            <span>Contactame</span>
                        </a>
                    </div>
                    
                </div>

                <figure>
                <Image 
                    src={abogada}
                    width={400}
                    height={400}
                    alt="Foto de la Abogada Magdiele"
                    />
                </figure>
            </div>
        </section>
    )
}