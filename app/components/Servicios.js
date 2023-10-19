'use client'
import '../styles/Servicio.css'
import ServicioCard from "./ServicioCard"
import Image from 'next/image';
import ContactButton from './ContactButton';
import {FaScaleBalanced, FaPeopleGroup } from "react-icons/fa6";

const caractCivil = [
    'Constitución de empresas.',
    'Contratos comerciales.',
    'Derecho societario.',
    'Fusiones y adquisiciones.',
    'Propiedad intelectual y marcas comerciales.',
    'Derecho del consumidor.',
]

const caractComercial = [
    'Derecho de familia (divorcios, custodia de menores, alimentos, sucesiones).',
    'Derecho inmobiliario.',
    'Litigios civiles.',
    'Responsabilidad civil.',
    'Derecho del seguro.',
    'Derecho de contratos.',
]

export default function Servicios() {


    return (
        <section id='servicios' className='section row servicios'>
            <div className='col-12 d-block d-md-flex d-xxl-block col-xxl-3'>


                <ServicioCard 
                    title='Derecho Mercantil'
                    description='Potenciamos tu negocio con asesoramiento legal sólido y estratégico. Protegemos tus intereses para que puedas alcanzar el éxito empresarial que deseas.'
                    icon={<FaScaleBalanced/>}
                    caracts={caractComercial}
                    />

                <ServicioCard 
                    title='Derecho Civil'
                    description='Tu bienestar y tus derechos son nuestra prioridad. Nuestro equipo legal está aquí para defender tus intereses y encontrar la mejor resolución para tus conflictos legales.'
                    icon={<FaPeopleGroup/>}
                    caracts={caractCivil}
                    />

            </div>
      
            <figure className='col-12 col-md-6 col-xxl-5'>
                <Image 
                    src="/img_mazo.jpg"
                    className=''
                    width={600}
                    height={600}
                    alt="Foto de la Abogada Magdiele"
                    />
            <div className="d-none d-md-flex d-lg-none">
                <ContactButton  />
            </div>
            </figure>

            

            <article className='col-12 col-md-6 d-md-block col-xxl-4 d-lg-flex flex-column gap-lg-2  gap-xxl-5'>

                <h3>NOS ALEGRA QUE <span className='no-wrap'>ESTES AQUI</span></h3>
                <p className='variable-font'>
                Te brindamos asesoramiento legal sólido y estratégico, respaldado por un equipo de abogados expertos y comprometidos en proteger tus intereses. Nuestra atención personalizada, combinada con nuestra amplia experiencia y conocimiento en el campo legal, nos permite ofrecerte soluciones efectivas y resultados positivos. Confía en nosotros para resolver tus problemas legales de manera justa, eficiente y exitosa. Tu satisfacción y tranquilidad son nuestra máxima prioridad
                </p>
                
                <div className="d-flex d-md-none d-lg-flex">
                  <ContactButton  />
                </div>
            </article>

        </section>
    )
}