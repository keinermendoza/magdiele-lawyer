"use client"
import Image from 'next/image'
import emailImg from '/public/images/email-abogada.jpg'
import { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Background() {
    return (
      <Image
        alt="Saludo de negocios"
        src={emailImg}
        quality={100}
        sizes="100%"
        fill
        style={{
          top: '0',
          left: '0',
          position: 'absolute',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
    )
  }

export default function ContactForm() {
    const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [errorNombre, setErrorNombre] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)

    const [isSending, setIsSending] = useState(false)

    const handleSubmit = async (e) => {
        setIsSending(true)
        e.preventDefault()
        // console.log(e.target.nombre)
        const form = new FormData(e.target)
        fetch('/api/message', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(form))
        }).then(resp => {
            if (!resp.ok) {
                toast.error('No fue posible enviar su mensaje. por favor revise los datos', {
                    position: "bottom-right",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } else {
                setEmail('')
                setNombre('')
                setMensaje('')
                toast.success('Mensaje enviado', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }).finally(() => {
            setIsSending(false)
           
        });
    }
  
    useEffect(() => {
        setErrorNombre(false)
        if (nombre.length > 0 && nombre.length < 3) {
            setErrorNombre('El nombre debe contener por lo menos 3 letras')
            return
        }
        if (nombre.match(/\d/)) {
            setErrorNombre('El nombre no debe incluir numeros')
        }
    },[nombre])

    useEffect(() => {
        setErrorEmail(false)
        if (email.includes(' ')) {
            setErrorEmail('El email no debe incluir espacios en blanco')
            return
        }
    },[email])
    

    const validateEmail = () => {
        if (!EMAIL_REGEX.test(email)){
            setErrorEmail('Email no valido.')
        }
    }

    return (
        <>
        <ToastContainer
           
        />

    <form
        onSubmit={handleSubmit}
        className='p-5 relative rounded-xl overflow-hidden min-w-[250px]' 
        action="">
        <Background />

        <div className="mb-5 p-5 relative rounded-xl bg-white bg-opacity-60 flex flex-col gap-5">
            <div>
                <label
                    className='block mb-2' 
                    htmlFor="nombre">
                    Nombre
                </label>
                {errorNombre &&
                    <p
                    className='text-red-800 text-sm mb-1' 
                    >{errorNombre}</p>
                }
             

                <input
             
                    onInput={(e) => setNombre(e.target.value)}
                    value={nombre}

                    id="nombre"
                    name='nombre'
                    type="text"
                    className='w-full text-base px-2 py-1 rounded-md'
                />
            </div>

            <div>
                <label
                    className='block mb-2' 
                    htmlFor="email">
                    Correo
                </label>

                {errorEmail &&
                    <p
                    className='text-red-800 text-sm mb-1' 
                    >{errorEmail}</p>
                }


                <input 
                    onBlur={validateEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name='email'
                    id="email"
                    type="text" 
                    className='w-full text-base px-2 py-1 rounded-md'
                />
                </div>

            <div>
                <label
                    className='block' 
                    htmlFor="pregunta">
                    Pregunta
                </label>
                <p className='mb-2 text-sm'>Aqui puedes hacer tu conslta o comentario</p>
                <p
                    className='text-red-500' 
                ></p>
                <textarea 
                    onInput={(e) => setMensaje(e.target.value)}
                    value={mensaje}

                    className='w-full text-base px-2 py-1 rounded-md'
                    name="pregunta"
                    id="pregunta"
                    cols="30"
                    rows="3"></textarea>
                </div>
        </div>

        <div className='relative flex justify-end'>
            <button
            disabled={errorEmail || errorNombre || isSending || !nombre || !email}
            type='submit'
            className="w-fit flex items-center lg:gap-5 gap-3 text-2xl lg:text-3xl py-2 px-4 lg:py-3 lg:px-6 rounded-md text-c-gold-soft border-solid border-2 border-c-gold-soft bg-c-brown-primary
            transition-all outline-offset-4 outline-transparent hover:outline hover:outline-3 hover:scale-105
            hover:outline-c-brown-primary disabled:opacity-75 hover:outline-0 disabled:hover:scale-100"

            >   
                <svg className='h-6 w-6 lg:h-8 lg:w-8' width="36" height="36" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.625 4.125V19.875C30.625 20.7701 30.2694 21.6285 29.6365 22.2615C29.0035 22.8944 28.1451 23.25 27.25 23.25H4.75C3.85489 23.25 2.99645 22.8944 2.36351 22.2615C1.73058 21.6285 1.375 20.7701 1.375 19.875V4.125M30.625 4.125C30.625 3.22989 30.2694 2.37145 29.6365 1.73851C29.0035 1.10558 28.1451 0.75 27.25 0.75H4.75C3.85489 0.75 2.99645 1.10558 2.36351 1.73851C1.73058 2.37145 1.375 3.22989 1.375 4.125M30.625 4.125V4.4895C30.6251 5.06572 30.4776 5.63236 30.1966 6.13544C29.9157 6.63853 29.5106 7.06131 29.02 7.3635L17.77 14.286C17.2378 14.6138 16.625 14.7874 16 14.7874C15.375 14.7874 14.7622 14.6138 14.23 14.286L2.98 7.365C2.48938 7.06281 2.0843 6.64003 1.80335 6.13694C1.5224 5.63386 1.37494 5.06722 1.375 4.491V4.125" stroke="#ECEAC6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {
                    isSending  && <span>Enviando...</span>
                }
                {
                    !isSending &&  <span>Enviar</span>
                }
                
            </button>
        </div>

    </form>
    </>

  )
}
