import '../styles/Hero.css'
import ContactButton from './ContactButton'
import Image from 'next/image'
export default function Hero() {
    return (
        <section className="section d-flex gap-5 flex-column-reverse flex-md-row justify-content-between align-items-center hero bg-img " id="home">
            
            <div className='text-hero col-12 col-md-6 d-flex flex-column gap-1 gap-md-2 gap-lg-3 gap-xl-4 gap-xxl-5'>
                <h1 className="name"><strong>Abogada Magdiele Mendoza</strong></h1>
                <h2 className="title">Derecho Civil y Mercantil</h2>
                <h4 className="paragraph">Brindando soluciones legales efectivas para el sector Civil  y Mercantil,desde hace más de 15 años </h4>
                
                <h4 className=''>Obtenga un presupuesto sin compromisos.</h4>
                <div className='d-flex d-md-block'>
                    <ContactButton />                
                </div>
            </div>

            <figure className='image-container'>
            <Image 
                src="/magdiele-provisional.jpg"
                className='image-hero '
                width={500}
                height={500}
                alt="Foto de la Abogada Magdiele"
                />

            </figure>
        </section>
    )
}