import Image from "next/image"
import abogada from '/public/abogada-blob-transition-ready.svg'
import { frede } from "../styles/fonts"
import WhatsappBtn from "../components/WhatsappBtn"
import Decoration from "../components/Decoration"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative p-4 md:p-6 lg:p-8 xl:p-10 py-16  bg-c-blue-primary text-c-gray-blue-primary ">
        <Decoration isGold position="bl" />
        <Decoration isGold position="br" />

        <div id="footer-nav-container transition-color" className="max-w-7xl mx-auto xl:text-lg flex gap-8 flex-wrap justify-between w-full">
            <div id="footer-developer-info" className=" flex flex-col gap-5 xl:gap-6">
                <h3 className={`${frede.className} text-xl xl:text-3xl font-semibold`}>MAGDIELE MENDOZA</h3>
                <figure className="flex gap-8 items-center">
                    <Image 
                        src={abogada} 
                        alt="Abogada"
                        width={80}
                        height={80}
                        className="w-20 h-20 xl:w-28 xl:h-28 rounded-full"
                    />
                    <figcaption className="text-sm xl:text-base">
                        <p>Desarrollador web</p>
                        <p>Licenciado en Economia</p>
                        <p>Usuario Linux</p>
                        <p>Autor de este sitio</p>
                    </figcaption>
                </figure>
            </div>

            {/* <nav className="" id="footer-current-page-sections-nav">
                <h4 className="mb-3 xl:mb-5 text-lg xl:text-xl">EN ESTA PAGINA</h4>
                <ul className="text-secundary flex flex-col gap-1 relative left-1">
                    
                </ul>
            </nav>
             */}
            <nav className="d-none lg:block" id="footer-other-pages-nav">
                <h4 className="mb-3 xl:mb-5 text-lg xl:text-xl">TODAS LAS PAGINAS</h4>
                <ul className="text-secundary flex flex-col gap-1 relative left-1">
                    <li><Link className="hover:text-white cursor-pointer hover:underline underline-offset-4"  href="/">Pagina Principal</Link></li>
                    <li><Link className="hover:text-white cursor-pointer hover:underline underline-offset-4" href="/blog">Publicaciones</Link></li>
                </ul>

            </nav>

            <div className="flex flex-col  gap-4" id="footer-create-account">
                <h4 className="text-lg xl:text-xl">CREAR CUENTA</h4>
                <WhatsappBtn />
            </div>
        </div>
        
        <p className="text-sm xl:text-base text-center mt-8">© 2024 Keiner Mendoza. Todos los Derechos Reservados</p>
    </footer>
  )
}
