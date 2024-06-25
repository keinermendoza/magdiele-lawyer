import Image from 'next/image';
import firma from '/public/firma-compra.png'
import { frede } from '../styles/fonts';
import { fetchServicesList } from '../lib/services';
import WhatsappBtn from '../components/WhatsappBtn';
import Decoration from '../components/Decoration';

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
            <Decoration />
            <Decoration position='tr' />
            <Decoration position='bl' />
            <Decoration position='br' />

            <div 
                className='relative z-10 max-w-[85rem] w-full mx-auto  px-4 md:px-6 lg:px-8 py-16 lg:py-24
                flex flex-col gap-12 lg:gap-20
            '>
                <header className='flex flex-col gap-6 lg:gap-10 text-center'>
                    <h2 className='text-2xl lg:text-4xl '>Soluciones Legales sin Complicaciones</h2>
                    <p>
                        <span className={`${frede.className} text-7xl lg:text-8xl`}>+ 20 Años</span><br />
                        <span className='text-xl lg:text-3xl'>De experiencia</span>    
                    </p>
                    <p className='text-xl lg:text-2xl max-w-lg mx-auto w-full'>Descubra lo que una profesional de Derecho puede hacer por usted, su familia o su empresa</p>
                </header>

                <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-10'>
                    <article className='text-center lg:text-start'>
                        <h3 className='text-2xl lg:text-3xl mb-8'>Principales Servicios</h3>
                        <ul className='list-disc list-inside text-lg lg:text-xl flex flex-col gap-2'>
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

                    <figure className='relative  max-w-md overflow-hidden rounded-2xl
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

                <footer className='flex gap-10 text-center lg:text-start  flex-col lg:flex-row items-center justify-between'>
                    <p className='text-lg lg:text-xl'>
                    ¿Lo que buscas no está en la lista?<br /> 
                        Hay muchos otros servicios disponibles. <br />
                        Haga una cosulta 100% Gratis.
                    </p>

                <WhatsappBtn isBlue text='Consulta 100% Gratis' />

                </footer>

            </div>

        </section>
    )
}