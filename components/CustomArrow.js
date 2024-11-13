import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export function CustomNextArrow({ swiperRef }) {
    const [visibleButton, setVisibleButton] = useState(false)

    const upadteLastSlide = () => {
        setVisibleButton(swiperRef.current.swiper.isEnd)
    }

    useEffect(() => {
        const swiperOnChange = swiperRef.current.swiper;

        upadteLastSlide()

        swiperOnChange.on("slideChange", upadteLastSlide)
        return () => {
            swiperOnChange.off('slideChange', upadteLastSlide);
        };

    }, [])

    const clickHandler = () => {
        swiperRef.current.swiper.slideNext()
    }

    return (
        <div
            className={`bg-white absolute top-1/2 z-50 right-1 rounded-full p-2 ${visibleButton ? "hidden" : "flex"}`}
        >
            <IoIosArrowForward style={{ fill: 'black', fontSize: '24px' }} onClick={clickHandler} />
        </div>
    );
}

export function CustomPrevArrow({ swiperRef }) {

    const [visibleButton, setVisibleButton] = useState(false)

    const upadteLastSlide = () => {
        setVisibleButton(swiperRef.current.swiper.isBeginning)
    }

    useEffect(() => {
        const swiperOnChange = swiperRef.current.swiper;

        upadteLastSlide()

        swiperOnChange.on("slideChange", upadteLastSlide)
        return () => {
            swiperOnChange.off('slideChange', upadteLastSlide);
        };

    }, [])

    const clickHandler = () => {
        swiperRef.current.swiper.slidePrev()
    }

    return (
        <div
            className={`bg-white absolute top-1/2 z-50 left-1 rounded-full p-2 ${visibleButton ? "hidden" : "flex"}`}
        >
            <IoIosArrowBack style={{ fill: 'black', fontSize: '24px' }} onClick={clickHandler} />
        </div>
    );
}
