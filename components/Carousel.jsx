import React, { useRef } from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { CustomNextArrow, CustomPrevArrow } from './CustomArrow';

const Carousel = ({ products }) => {
    const swiperRef = useRef()

    const breakpoints = {

        480: { slidesPerView: 1, spaceBetween: 10, },
        768: { slidesPerView: 4, spaceBetween: 20, },
        1024: { slidesPerView: 5, spaceBetween: 30, },

    }

    return (

        <>
            <div className='px-6 w-full relative py-2'>
                <Swiper breakpoints={breakpoints} ref={swiperRef} modules={[Navigation]} >
                    {
                        products.map((item, index) => (
                            <SwiperSlide key={index}>  <Card products={item} key={item.id} /></SwiperSlide>
                        ))
                    }

                </Swiper >
                <CustomNextArrow swiperRef={swiperRef} />
                <CustomPrevArrow swiperRef={swiperRef} />
            </div>

        </>

    );
};

export default Carousel;
