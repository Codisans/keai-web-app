'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CategoryCard } from '../atoms/CategoryCard'

export const CategoryNav = ({ categories }) => {
    return (
        <nav className="pt-gutter">
            <Swiper
                freeMode={true}
                slidesPerView="auto"
                modules={[FreeMode]}
                spaceBetween={12}
                className="w-full px-gutter">
                <SwiperSlide style={{ width: '5rem' }}>
                    <CategoryCard />
                </SwiperSlide>
                {categories?.map((category, i) => (
                    <SwiperSlide key={i} style={{ width: '5rem' }}>
                        <CategoryCard category={category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </nav>
    )
}
