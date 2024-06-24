"use client"
import AcordionQuestion from '../components/AcordionQuestion'
import Decoration from '../components/Decoration'

export default function FAQ() {
  return (
    <section 
        id="respuestas"
        className="relative
        bg-c-brown-primary text-c-gold-primary">
          <svg
            className='absolute bottom-0 left-0 w-full h-auto' 
            width="1800" height="238" viewBox="0 0 1800 238" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 99.6L300 52.8L600 146.4L900 216.6L1200 99.6L1500 6L1800 123V240H1500H1200H900H600H300H0V99.6Z" fill="#5C5CFF"/>
            <path d="M1 238L300.833 0H600.667L900.5 119L1200.33 39.6667L1500.17 158.667L1800 119V238H1500.17H1200.33H900.5H600.667H300.833H1Z" fill="#7A7AFF"/>
            <path d="M0 228.14L248.5 143.838L445 228.14L727 101.255L1042 200.688L1200 143.838L1324 184.116L1445 143.838L1573 80L1800 228.14V245H1500H1200H900H600H300H0V228.14Z" fill="#A3A3FF"/>
          </svg>


          <Decoration isGold />
          <Decoration position='tr' isGold />

        <div className='relative z-10 max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24'>
          <h2 className="text-center text-3xl lg:text-4xl">Respuestas a Preguntas Frecuentes</h2>

          <div className='my-10 flex flex-col gap-5'>
              <AcordionQuestion question="¿Hacer una consulta es Gratis?">
              Si. hacer una consulta por Whatsapp o por el formulario  en esta pagina es 100% gratis, puedes hacer todas las consultas que quieras.
              </AcordionQuestion>

              <AcordionQuestion question="¿Si escribo por Whatsapp quien me va a atender?">
              Todas las consultas son respondidas por la propia abogada Magdiele Mendoza, así que puede tener certeza que obtendra las mejores respuestas posibles.
              </AcordionQuestion>
              
              <AcordionQuestion question="Quiero hacer una consulta ¿es mejor hacerlo por Whatsapp o por email?">
              Recomendamos hacer las consultas por Whatsapp  la atencion es más rapida por este medio, 
              sin embargo si prefiere recibir una respuesta en su correo electronico puede usar el formulario de la seccion de contacto. <br /> 
              Por favor considere que la respuesta se enviará al correo electronico que proporcione en el campo de correo del formulario.
              </AcordionQuestion>
              
              <AcordionQuestion question="¿Puedo hablar con la abogada en persona antes de contratar el servicio?">
              Por supuesto que sí, puedes visitar a la abogada y ella te atendera con todo gusto. En la seccion de <a href="">Ubicacion</a>
              encontraras todos los detalles sobre la direccion de la oficina y los horarios de atención.
              </AcordionQuestion>

              <AcordionQuestion question="¿Reservar una cita con la doctora es gratis?">
              Sí, dentro de los horarios de atencion al público puedes escribir para reservar una cita totalmente gratis.
              </AcordionQuestion>
          </div>
        </div>

    </section>
  )
}
