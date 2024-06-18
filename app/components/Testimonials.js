"use client"

import Image from 'next/image'
import justicia from '/public/abogada-justicia.png'
import { frede } from '../styles/fonts'
import { Swiper, SwiperSlide } from './Swipper'
import { fetchTestimonialList } from '../lib/place-holder-data'
import { useEffect, useState } from 'react'

export default function  Testimonials() {
    // const [testimonials, setTestimonials] = useState([])
    // useEffect( async () => {
    //     const loadedTestimonials = fetchTestimonialList()
    //     setTestimonials(loadedTestimonials)
    // },[])

    return (
        <section 
            id="testimonials"
            className="h-screen max-h-[800px] relative bg-c-blue-65 overflow-hidden
            after:content-['']
            after:absolute after:top-0 after:left-0
            after:w-full after:h-full
            after:bg-c-blue-65
            " 
            >
            <Image 
                src={justicia}
                className='absolute left-0 right-0 mx-auto -bottom-10'
                width={400}
                height={400}
                alt="Foto de la Abogada Magdiele"
            />
            <div className='relative z-10 max-w-[85rem] w-full mx-auto p-4 md:p-6 lg:p-8'>

                <div className='text-c-gold-shine text-center mb-10 w-full'>
                    <h2 className={`${frede.className} text-7xl mb-5`}>
                        Nuestros Clientes
                    </h2>
                    <p className='text-3xl flex flex-col gap-3'>
                        <span>Conoce las historias de quienes han experimentado </span>
                        <span>nuestros servicios</span>
                    </p>
                </div>

                <div>
                    <Swiper
                        loop={true}
                        speed={1000}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false}}
                        breakpoints={{ 768: { slidesPerView: 2 } }}
                        >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}