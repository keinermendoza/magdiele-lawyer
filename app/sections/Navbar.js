'use client'
import { HiMenuAlt2, HiOutlineChevronUp } from "react-icons/hi";
import { useState, useEffect } from "react"
import WhatsappBtn from "../components/WhatsappBtn";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    function handleNavbarOpen() {
        setIsOpen(!isOpen)
    }

    function handleResize () {
        setIsOpen(false)
    }

    // closing the navbar when resize the screen
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    return (
    <header 
            className="w-full bg-black bg-opacity-40 fixed z-50">
        <div 
            className='h-12 relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8
            flex justify-between items-center gap-5'>

            

            <a className="text-lg font-bresse font-semibold whitespace-pre underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
                href="#Brand">Challenge  Memorize</a>

            <nav className="hidden sm:flex grow justify-between bg-white bg-opacity-10 p-2 rounded-md">
                <ul className="flex gap-8 font-semibold ">        
                    <li>
                        <a className="transition-all underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
                        href="#servicios">Servicios</a>
                    </li>

                    <li>
                        <a className="underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
                        href="#clientes">Clientes</a>
                    </li>
                    <li>
                        <a className="underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
                        href="#contacto">Contacto</a>
                    </li>
                    <li>
                        <a className="underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
                        href="#ultimas-publicaicones">Ultimas Publicaciones</a>
                    </li>
                    <li>
                        <a className="underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
                        href="#ubicacion">Ubicacion</a>
                    </li>
                    <li>
                        <a className="underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
                        href="#faq">FAQ</a>
                    </li>
                </ul>

                
            </nav>

            <div className="hidden sm:block">
                <WhatsappBtn size="small" />
            </div>

            <button 
                onClick={handleNavbarOpen}
                className="rounded grid place-content-center w-7 h-7 bg-teal-400 sm:hidden">
                 {isOpen ? <HiOutlineChevronUp/> : <HiMenuAlt2/>}
            </button>
                    
        </div>
        
        {/* MENU MOBILE */}
        <nav 
            className={`transition-all duration-300 bg-darkheade fixed w-full overflow-hidden
                ${isOpen ? 'block opacity-100 top-12' : 'hidden opacity-0 top-10'}
            `}>
            <ul className="min-h-screen flex flex-col text-center">
                <li>
                    <a className="transition duration-200 block py-3 w-full hover:bg-violet-900" 
                    href="#servicios">Servicios</a>
                </li>

                <li>
                    <a className="transition duration-200 block py-3 w-full hover:bg-violet-900" 
                    href="#clientes">Clientes</a>
                </li>
                <li>
                    <a className="transition duration-200 block py-3 w-full hover:bg-violet-900" 
                    href="#contacto">Contacto</a>
                </li>
                <li>
                    <a className="transition duration-200 block py-3 w-full hover:bg-violet-900" 
                    href="#ultimas-publicaicones">Ultimas Publicaciones</a>
                </li>
                <li>
                    <a className="transition duration-200 block py-3 w-full hover:bg-violet-900" 
                    href="#ubicacion">Ubicacion</a>
                </li>
                <li>
                    <a className="transition duration-200 block py-3 w-full hover:bg-violet-900" 
                    href="#faq">FAQ</a>
                </li>
               

                <li className="flex py-3 justify-center items-center transition duration-200 w-full hover:bg-violet-800">
                    {/* <!-- FACEBOOK SHARE --> */}
                    <div id="facebook-share-button" 
                        className="fb-share-button grayscale" 
                        data-href="https://keinermendoza.com"
                        data-size="large"
                        data-lazy="true" 
                        data-layout="button">
                    </div>
                </li>
            </ul>
        </nav>
    </header>
  )
}
