"use client"

import WhatsappBtn from '../components/WhatsappBtn'
import Decoration from '../components/Decoration'
import ContactForm from '../components/ContactForm'


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
            <ContactForm />
          </div>
        </div>

      </div>

    </section>
  )
}
