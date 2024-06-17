'use client'
import Image from 'next/image';
import ContactButton from './ContactButton';
import {FaScaleBalanced, FaPeopleGroup } from "react-icons/fa6";
import { frede } from '../styles/fonts';
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
        <section 
            id="servicios"
            className="relative
            bg-c-gold-soft text-c-brown-primary
            " 
            >
            <div 
                className='relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8
                flex flex-col gap-12
            '>
                <article className='flex flex-col gap-10 text-center'>
                    <h2 className='text-4xl '>Solucion Legales sin Complicaciones ni Burocracia </h2>
                    <p>
                        <span className={`${frede.className} text-8xl`}>+ 20 Años</span><br />
                        <span className='text-3xl'>De experiencia</span>    
                    </p>
                    <p className='text-xl max-w-md mx-auto'>Descubra lo que una profesional del Derecho puede hacer por usted, su familia o su empresa</p>
                </article>

                <div className='flex justify-between'>

                </div>

            </div>

        </section>
    )
}