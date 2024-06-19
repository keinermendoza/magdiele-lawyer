import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
export default function WhatsappBtn({isBlue=false}) {
  return (
    <a href="#whatsapp-link"
    className='w-fit text-3xl flex items-center gap-5 py-3 px-6 rounded-md bg-c-gold-primary text-c-brown-primary'

    >   
        <FaWhatsapp></FaWhatsapp>
        <span>Contactame</span>
    </a>
  )
}
