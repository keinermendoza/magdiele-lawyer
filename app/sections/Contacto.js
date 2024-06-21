import Image from 'next/image'
import emailImg from '/public/images/email-abogada.jpg'
import WhatsappBtn from '../components/WhatsappBtn'
import emailSvg from '/public/icons/email.svg'

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
      <div className='relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8'>

        <h2 className="text-center text-4xl mb-16">Siempre Listos para atenderte</h2>

        <div className='flex justify-between gap-5 text-2xl'>

          <div className="flex flex-col gap-5 items-center ">
              <p>Recibe una respuesta rapida y familiar escribiendo por Whatsapp</p>
              <p>Te recomendamos este metodo, es la forma mas practica. La mayoria de nuestros clientes lo usan.</p>
              <WhatsappBtn isBlue size='big' />
          </div>

          <div className="max-w-sm ">
            <p className='mb-5 text-center'>Has una consulta gratuita y recibe la respuesta en tu correo electronico</p>
            <form
              className='p-5 relative rounded-xl overflow-hidden min-w-[280px]' 
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
                    className='w-fit text-3xl flex items-center gap-5 py-3 px-6 rounded-md text-c-gold-soft border-solid border-2 border-c-gold-soft bg-c-brown-primary'

                    >   
                      <Image 
                        alt='enviar mensaje'
                        src={emailSvg}
                        width={36}
                        height={36}
                      />

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
