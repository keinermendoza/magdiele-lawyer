'use client'
import '../styles/Servicio.css'
import ServicioCard from "./ServicioCard"
import Image from 'next/image';
import ContactButton from './ContactButton';
import {FaScaleBalanced, FaPeopleGroup } from "react-icons/fa6";

const caractCivil = [
    'Compraventa de Vehículos e Inmuebles',
    'Poder General y Especial',
    'Divorcio por Desafecto',
    'Titulo Supletorio',
    'Declaración de Herederos Universales',
    'Contrato de Arrendamiento',
    'Constitución de Asociaciones Civiles y Fundaciones',
    'Justificativo de Testigos, entre otros…',
]

const caractMercantil = [
    'Registro de Compañía Anónima',
    'Registro PYMES',
    'Firma Personal',
    'Actas de Asambleas',
]

export default function Servicios() {


    return (
        <section id='servicios' className='section row servicios'>
            <div className='col-12 d-block d-md-flex d-xxl-block col-xxl-3'>

                <ServicioCard 
                    title='Derecho Civil'
                    description='Tu bienestar es nuestra prioridad, por eso elaboramos tus documentos jurídicos y realizamos tus trámites en Tribunales Civiles, para la mejor protección de tus derechos e intereses.'
                    icon={<FaPeopleGroup/>}
                    caracts={caractCivil}
                    />

                <ServicioCard 
                    title='Derecho Mercantil'
                    description='Brindamos el asesoramiento legal necesario para el registro de tu empresa.
                    Protegemos tus intereses para que puedas alcanzar el éxito empresarial que deseas.'
                    icon={<FaScaleBalanced/>}
                    caracts={caractMercantil}
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
          
            </figure>

            

            <article className='col-12 col-md-6 d-md-block col-xxl-4 d-lg-flex flex-column gap-lg-2  gap-xxl-5'>

                <h3>NOS ALEGRA QUE <span className='no-wrap'>ESTES AQUI</span></h3>
                <p className='variable-font'>
                Te brindamos asesoramiento legal personalizado, con el compromiso de ofrecerte soluciones rápidas, efectivas, y con los mejores precios
                </p>
                
                <div className="d-flex">
                  <ContactButton  />
                </div>
            </article>

        </section>
    )
}