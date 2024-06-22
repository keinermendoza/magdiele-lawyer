'use client'
import { HiMenuAlt2, HiOutlineChevronUp } from "react-icons/hi";
import { useState, useEffect, useRef } from "react"
import WhatsappBtn from "../components/WhatsappBtn";

const MobileLink = ({children, link}) => {
    return (
        <li>
            <a className="transition duration-200 block py-3 w-full hover:bg-c-gray-blue-transparent" 
            href={link}>{children}</a>
        </li>
    )
}

const DesktopLink = ({children, link}) => {
    return (
        <li>
            <a className="underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
            href={link}>{children}</a>
        </li>
    )
}

export default function Navbar() {
    const [isSolidBackground, setIsSolidBackground] = useState(false)
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
    
    function handleChangeBackground() {
        setIsSolidBackground(window.scrollY > 400) 
    }

    useEffect(() => {
        window.addEventListener('scroll', handleChangeBackground)
        return () => {
            window.removeEventListener('scroll', handleChangeBackground)
        }
    }, [])
    return (
    <header 
        className={`${isSolidBackground ? 'bg-c-blue-primary' : 'bg-black bg-opacity-40'} w-full  fixed z-50 transition-all duration-500`}>
        <div 
            className='h-12 relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8
            flex justify-between items-center gap-5'>

            

            <a className="flex items-center gap-2 text-xl text-c-gold-shine underline-offset-4 hover:underline hover:decoration-2 hover:decoration-slate-200" 
                href="#Brand">
                <svg width="22" height="22" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_250_1156)">
                        <path d="M16.0348 6.70703H13.9658V19.638H16.0348V6.70703Z" fill="#FFD782"/>
                        <path d="M16.0345 19.1211H13.9655C13.6799 19.1211 13.4482 19.3527 13.4482 19.6384V26.8797H16.5517V19.6384C16.5517 19.3527 16.3202 19.1211 16.0345 19.1211Z" fill="#FFC36E"/>
                        <path d="M19.9639 27.4286L16.5519 26.3623H13.4484L10.0365 27.4285C9.60457 27.5635 9.31055 27.9634 9.31055 28.416H20.6898C20.6898 27.9635 20.3957 27.5635 19.9639 27.4286Z" fill="#FFD782"/>
                        <path d="M15 4.12057C15.857 4.12057 16.5517 3.42583 16.5517 2.56883C16.5517 1.71183 15.857 1.01709 15 1.01709C14.143 1.01709 13.4482 1.71183 13.4482 2.56883C13.4482 3.42583 14.143 4.12057 15 4.12057Z" fill="#FFD782"/>
                        <path d="M11.3329 19.4245L6.20692 8.14738V6.19012C6.20692 5.90447 5.9753 5.67285 5.68965 5.67285C5.40401 5.67285 5.17239 5.90447 5.17239 6.19012V8.14738L0.0464875 19.4245C-0.0716961 19.6844 0.0432062 19.9909 0.303362 20.1091C0.561995 20.2271 0.869847 20.1127 0.98803 19.8522L5.68959 9.50893L10.3912 19.8522C10.4779 20.0429 10.6657 20.1558 10.8622 20.1555C10.934 20.1555 11.0067 20.1406 11.0759 20.1091C11.3361 19.9909 11.4511 19.6843 11.3329 19.4245Z" fill="#F5B464"/>
                        <path d="M29.954 19.4245L24.828 8.14738V6.19012C24.828 5.90447 24.5964 5.67285 24.3107 5.67285C24.0251 5.67285 23.7935 5.90447 23.7935 6.19012V8.14738L18.6676 19.4245C18.5494 19.6844 18.6643 19.9909 18.9245 20.1091C19.1836 20.2271 19.4909 20.1127 19.6092 19.8522L24.3107 9.50899L29.0124 19.8523C29.099 20.043 29.2869 20.1559 29.4834 20.1556C29.5551 20.1556 29.6278 20.1407 29.6971 20.1091C29.9572 19.9909 30.0722 19.6843 29.954 19.4245Z" fill="#F5B464"/>
                        <path d="M20.6896 29.9824H9.31023C9.02459 29.9824 8.79297 29.7508 8.79297 29.4651V28.4307H21.2068V29.4651C21.2068 29.7508 20.9753 29.9824 20.6896 29.9824Z" fill="#FFC36E"/>
                        <path d="M21.2064 28.9476H8.79266C8.50701 28.9476 8.27539 28.716 8.27539 28.4304C8.27539 28.1447 8.50701 27.9131 8.79266 27.9131H21.2064C21.492 27.9131 21.7237 28.1447 21.7237 28.4304C21.7237 28.7161 21.4921 28.9476 21.2064 28.9476Z" fill="#F5B464"/>
                        <path d="M16.0345 7.22398H13.9655C13.6799 7.22398 13.4482 6.99236 13.4482 6.70672C13.4482 6.42107 13.6799 6.18945 13.9655 6.18945H16.0345C16.3201 6.18945 16.5517 6.42107 16.5517 6.70672C16.5517 6.99242 16.3202 7.22398 16.0345 7.22398Z" fill="#F5B464"/>
                        <path d="M5.68975 9.29355C6.26107 9.29355 6.72422 8.83041 6.72422 8.25908C6.72422 7.68776 6.26107 7.22461 5.68975 7.22461C5.11842 7.22461 4.65527 7.68776 4.65527 8.25908C4.65527 8.83041 5.11842 9.29355 5.68975 9.29355Z" fill="#FFD782"/>
                        <path d="M24.3099 9.29355C24.8812 9.29355 25.3443 8.83041 25.3443 8.25908C25.3443 7.68776 24.8812 7.22461 24.3099 7.22461C23.7385 7.22461 23.2754 7.68776 23.2754 8.25908C23.2754 8.83041 23.7385 9.29355 24.3099 9.29355Z" fill="#FFD782"/>
                        <path d="M10.8621 19.1211H0.517266C0.231621 19.1211 0 19.3527 0 19.6384C0 21.6686 2.49902 23.259 5.68963 23.259C8.88023 23.259 11.3793 21.6686 11.3793 19.6384C11.3793 19.3527 11.1477 19.1211 10.8621 19.1211Z" fill="#FFD782"/>
                        <path d="M29.4831 19.1211H19.1384C18.8527 19.1211 18.6211 19.3527 18.6211 19.6384C18.6211 21.6686 21.1201 23.259 24.3107 23.259C27.5013 23.259 30.0004 21.6686 30.0004 19.6384C30.0004 19.3527 29.7688 19.1211 29.4831 19.1211Z" fill="#FFD782"/>
                        <path d="M24.9127 5.08318L16.0346 3.60352H13.9656L5.08752 5.08318C4.83814 5.12479 4.65527 5.34059 4.65527 5.59336V5.67246C4.65527 5.95811 4.88689 6.18973 5.17254 6.18973H24.8277C25.1133 6.18973 25.345 5.95811 25.345 5.67246V5.59336C25.3449 5.34059 25.1621 5.12479 24.9127 5.08318Z" fill="#FFC36E"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_250_1156">
                        <rect width="30" height="30" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                    </defs>
                </svg>
                <span>
                    Abogada Magdile
                </span>
            </a>

            <nav className="hidden lg:flex justify-between text-white bg-white bg-opacity-10 py-2 px-4  rounded-md">
                <ul className="flex gap-4 xl:gap-8 ">        
                    <DesktopLink link="#servicios">Servicios</DesktopLink>
                    <DesktopLink link="#clientes">Clientes</DesktopLink>
                    <DesktopLink link="#contacto">Contacto</DesktopLink>
                    <DesktopLink link="#ultimas-publicaciones">Ultimas Publicaciones</DesktopLink>
                    <DesktopLink link="#ubicacion">Ubicacion</DesktopLink>
                    <DesktopLink link="#faq">Respuestas</DesktopLink>
                </ul>
            </nav>

            <div className="hidden sm:block">
                <WhatsappBtn size="small" />
            </div>

            <button 
                onClick={handleNavbarOpen}
                className="rounded grid place-content-center w-7 h-7 bg-c-gold-primary lg:hidden">
                 {isOpen ? <HiOutlineChevronUp/> : <HiMenuAlt2/>}
            </button>
                    
        
        {/* MENU MOBILE */}
        <nav 
            className={`transition-all left-0 duration-300 bg-c-blue-95 text-c-gold-shine fixed w-screen h-screen overflow-hidden
                ${isOpen ? 'block opacity-100 top-12' : 'hidden opacity-0 top-10'}
            `}>
            <ul className="min-h-screen flex flex-col text-center">
                <MobileLink link="#servicios">Servicios</MobileLink>
                <MobileLink link="#clientes">Clientes</MobileLink>
                <MobileLink link="#contacto">Contacto</MobileLink>
                <MobileLink link="#ultimas-publicaciones">Ultimas Publicaciones</MobileLink>
                <MobileLink link="#ubicacion">Ubicacion</MobileLink>
                <MobileLink link="#faq">Respuestas</MobileLink>
            </ul>
        </nav>

        </div>

    </header>
  )
}
