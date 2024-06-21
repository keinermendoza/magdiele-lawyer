import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
export default function WhatsappBtn({isBlue=false, text='Contactame', size='medium'}) {
  let sizeClass = null
  switch (size) {
    case 'medium':
      sizeClass = 'text-3xl py-3 px-6'
      break;
    case 'big':
      sizeClass = 'text-4xl py-4 px-8'
      break;
    case 'small':
      sizeClass = 'py-1 px-2'
      break;
    default:
      throw new Error('You must to provide a valid size: default:"medium", options: ["big", "small"]')
  }

  return (
    <a href="#whatsapp-link"
    className={`w-fit flex items-center gap-5 rounded-md 
    transition-all outline-offset-4 outline-transparent hover:outline hover:outline-2 hover:scale-105
    ${isBlue ? 'bg-c-blue-primary text-white hover:outline-c-blue-primary' : 'bg-c-gold-primary text-c-brown-primary  hover:outline-c-gold-primary'}
    ${sizeClass}
    `}
    >   
        <FaWhatsapp></FaWhatsapp>
        <span>{text}</span>
    </a>
  )
}
