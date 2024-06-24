import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
export default function WhatsappBtn({isBlue=false, text='Contactame', size='medium'}) {
  let sizeClass = null
  switch (size) {
    case 'medium':
      sizeClass = 'text-2xl lg:text-3xl py-2 px-4 lg:py-3 lg:px-6'
      break;
    case 'big':
      sizeClass = 'text-3xl lg:text-4xl py-2 px-4 lg:py-4 lg:px-8'
      break;
    case 'small':
      sizeClass = 'py-1 px-3'
      break;
    default:
      throw new Error('You must to provide a valid size: default:"medium", options: ["big", "small"]')
  }

  return (
    <a href="https://wa.me/message/ZHCKCJK5L7MXI1"
    target='_blank'
    className={`w-fit flex items-center gap-3 lg:gap-5 rounded-md 
    transition-all outline-offset-4 outline-transparent hover:outline hover:outline-2 hover:scale-105
    ${isBlue ? 'bg-c-blue-primary text-white hover:outline-c-blue-primary' : 'bg-c-gold-primary text-c-brown-primary  hover:outline-c-gold-primary'}
    ${sizeClass}
    `}
    >   
        <FaWhatsapp className='shrink-0' />
        <span>{text}</span>
    </a>
  )
}
