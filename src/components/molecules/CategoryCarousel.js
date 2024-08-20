'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect } from 'react'
import { CategoryCard } from '../atoms/CategoryCard'

export const CategoryCarousel = ({ categories }) => {
    useEffect(() => {
        // console.log(categories)
    }, [])

    return (
        <Swiper
            freeMode={true}
            slidesPerView="auto"
            modules={[FreeMode]}
            spaceBetween={12}
            className="w-full px-gutter">
            {categories?.map((category, i) => (
                <SwiperSlide key={i} className="w-min">
                    <CategoryCard category={category} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
