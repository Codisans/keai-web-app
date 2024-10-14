'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CategoryCard } from './CategoryCard'

export const CategoryNav = ({ categories }) => {
    if (!categories) return

    return (
        <nav className="pt-gg">
            <Swiper
                freeMode={true}
                slidesPerView="auto"
                modules={[FreeMode]}
                spaceBetween={0}
                className="w-full px-gg items-end">
                <SwiperSlide style={{ width: 'max-content' }}>
                    <CategoryCard />
                </SwiperSlide>
                {categories?.map((category, i) => (
                    <SwiperSlide key={i} style={{ width: 'max-content' }}>
                        <CategoryCard category={category} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </nav>
    )
}
