"use client"
import AcordionQuestion from '../components/AcordionQuestion'

export default function FAQ() {
  return (
    <section 
        id="preguntas-frecuentes"
        className="relative
        bg-c-brown-primary text-c-gold-primary">

        <div className='relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8'>
          <h2 className="text-center text-4xl">Respuestas a Preguntas Frecuentes</h2>

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
