import Image from 'next/image'
import emailImg from '/public/images/email-abogada.jpg'
import WhatsappBtn from '../components/WhatsappBtn'
import Decoration from '../components/Decoration'

function Background() {
  return (
    <Image
      alt="Saludo de negocios"
      src={emailImg}
      quality={100}
      sizes="100%"
      fill
      style={{
        top: '0',
        left: '0',
        position: 'absolute',
        objectFit: 'cover',
        objectPosition: 'center'
      }}
    />
  )
}

export default function Contacto() {
  return (
    <section 
      id="contacto"
      className="relative
      bg-c-gold-soft text-c-brown-primary">
          <Decoration />
          <Decoration position='tr' />
          <Decoration position='bl' />
          <Decoration position='br' />
      <div className='relative z-10 max-w-[85rem] w-full mx-auto  px-4 md:px-6 lg:px-8 py-16 lg:py-24'>

        <h2 className="text-center text-3xl lg:text-4xl mb-12 lg:mb-20">Siempre Listos para atenderte</h2>

        <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 text-xl lg:text-2xl'>

          <div className="w-full max-w-md flex flex-col gap-6 lg:gap-10 items-center text-center ">
              <p>Recibe una respuesta rapida y familiar escribiendo por Whatsapp</p>
              <p>Te recomendamos este metodo, es la forma mas practica. La mayoria de nuestros clientes lo usan.</p>
              <WhatsappBtn isBlue size='big' />
          </div>

          <div className="w-full max-w-md ">
            <p className='mb-5 text-center'>Has una consulta gratuita y recibe la respuesta en tu correo electronico</p>
            <form
              className='p-5 relative rounded-xl overflow-hidden min-w-[250px]' 
              action="">
              <Background />

                <div className="mb-5 p-5 relative rounded-xl bg-white bg-opacity-60 flex flex-col gap-5">
                  <div>
                    <label
                      className='block mb-2' 
                      htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      id="nombre" 
                      type="text"
                      className='w-full'
                    />
                  </div>

                  <div>
                    <label
                      className='block mb-2' 
                      htmlFor="email">
                      Correo
                    </label>
                    <input 
                      id="email"
                      type="email" 
                      className='w-full'
                    />
                  </div>

                  <div>
                    <label
                      className='block' 
                      htmlFor="pregunta">
                      Pregunta
                    </label>
                    <p className='mb-2 text-sm'>Aqui puedes hacer tu conslta o comentario</p>
                    <textarea 
                      className='w-full'
                      name="pregunta"
                      id="pregunta"
                      cols="30"
                      rows="3"></textarea>
                  </div>
                </div>

                <div className='relative flex justify-end'>
                  <button
                    type='submit'
                    className='w-fit text-3xl flex items-center gap-5 py-3 px-6 rounded-md text-c-gold-soft border-solid border-2 border-c-gold-soft bg-c-brown-primary
                    transition-all outline-offset-4 outline-transparent hover:outline hover:outline-3 hover:scale-105
                    hover:outline-c-brown-primary
                    '

                    >   
                      <svg width="36" height="36" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.625 4.125V19.875C30.625 20.7701 30.2694 21.6285 29.6365 22.2615C29.0035 22.8944 28.1451 23.25 27.25 23.25H4.75C3.85489 23.25 2.99645 22.8944 2.36351 22.2615C1.73058 21.6285 1.375 20.7701 1.375 19.875V4.125M30.625 4.125C30.625 3.22989 30.2694 2.37145 29.6365 1.73851C29.0035 1.10558 28.1451 0.75 27.25 0.75H4.75C3.85489 0.75 2.99645 1.10558 2.36351 1.73851C1.73058 2.37145 1.375 3.22989 1.375 4.125M30.625 4.125V4.4895C30.6251 5.06572 30.4776 5.63236 30.1966 6.13544C29.9157 6.63853 29.5106 7.06131 29.02 7.3635L17.77 14.286C17.2378 14.6138 16.625 14.7874 16 14.7874C15.375 14.7874 14.7622 14.6138 14.23 14.286L2.98 7.365C2.48938 7.06281 2.0843 6.64003 1.80335 6.13694C1.5224 5.63386 1.37494 5.06722 1.375 4.491V4.125" stroke="#ECEAC6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                      <span>Enviar</span>
                    </button>
                </div>

            </form>
          </div>
        </div>

      </div>

    </section>
  )
}
