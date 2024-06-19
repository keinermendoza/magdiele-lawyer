import Image from 'next/image';
import firma from '/public/firma-compra.png'
import ContactButton from '../components/ContactButton';
import {FaScaleBalanced, FaPeopleGroup } from "react-icons/fa6";
import { frede } from '../styles/fonts';
import { list } from 'postcss';
import { fetchServicesList } from '../lib/services';
import { FaWhatsapp } from 'react-icons/fa6';

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

export async function Servicios() {
    const servicios = await fetchServicesList()

    return (
        <section 
            id="servicios"
            className="relative
            bg-c-gold-soft text-c-brown-primary
            " 
            >
            <div 
                className='relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8
                flex flex-col gap-20
            '>
                <header className='flex flex-col gap-10 text-center'>
                    <h2 className='text-4xl '>Solucion Legales sin Complicaciones ni Burocracia </h2>
                    <p>
                        <span className={`${frede.className} text-8xl`}>+ 20 Años</span><br />
                        <span className='text-3xl'>De experiencia</span>    
                    </p>
                    <p className='text-2xl max-w-lg mx-auto'>Descubra lo que una profesional del Derecho puede hacer por usted, su familia o su empresa</p>
                </header>

                <div className='flex justify-between gap-10'>
                    <article>
                        <h3 className='text-3xl mb-8'>Principales Servicios</h3>
                        <ul className='list-disc list-inside text-xl flex flex-col gap-2'>
                            {
                                servicios.map(servicio => (
                                    <li key={servicio.id}>
                                        {servicio.name}
                                    </li>
                                )
                                    
                                )
                            }
                        </ul>
                    </article>

                    <figure className='relative w-full max-w-md overflow-hidden rounded-2xl
                        after:content-[""] after:absolute after:top-0 after:left-0
                        after:w-full after:h-full
                        after:bg-c-gray-blue-transparent
                        '>
                        <Image
                        src={firma}
                        className='w-full h-full'
                        width={450}
                        height={450}
                        alt="Firma de documento"
                        />
                    </figure>

                </div>

                <footer className='flex items-center justify-between'>
                    <p className='max-w-md'>
                        Lo que buscas no está en la lista?<br /> 
                        Hay muchos otros servicios disponibles. <br />
                        Haga una cosulta 100% Gratis.
                    </p>
                    
                    <a href="#whatsapp-link"
                    className='w-fit text-3xl flex items-center gap-5 py-4 px-6 rounded-md text-white bg-c-blue-primary'
                    >   
                        <FaWhatsapp></FaWhatsapp>
                        <span>Consulta 100% Gratis</span>
                    </a>


                </footer>

            </div>

        </section>
    )
}