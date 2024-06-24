// copied from https://swiperjs.com/blog/using-swiper-element-in-react

import { useEffect, useRef, useState } from 'react';
import { register } from 'swiper/element/bundle';

export function Swiper(props) {
  const swiperRef = useRef(null);
  const {
    children,
    ...rest
  } = props;

  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const params = {
      ...rest
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

export function TestimonialSwiper({children}) {
  const swiperRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    // Register Swiper web component
    register();

    // pass component props to parameters
    const conf = {
      loop: true,
      centeredSlides: true,
      initialSlide: 2,
      speed: 1000,
      spaceBetween: 10,
      breakpoints: {
        1: {
          slidesPerView: 1.125,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.125,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.125,
          spaceBetween: 10,
        },
        
      },
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
    };
    // Assign it to swiper element
    Object.assign(swiperRef.current, conf);
    // Inicializar swiper
    swiperRef.current.initialize();

    // initialize swiper
    setIsLoading(false)
  }, []);

  return ( 
    <div className={isLoading ? 'hidden' : ''}>
      <swiper-container init="false" ref={swiperRef}>
        {children}
      </swiper-container>
    </div>
      )
}

export function SwiperSlide(props) {
  const {
    children,
    ...rest
  } = props;

  return (
    <swiper-slide className="grid place-content-center" {...rest}>
      {children}
    </swiper-slide>
  );
}