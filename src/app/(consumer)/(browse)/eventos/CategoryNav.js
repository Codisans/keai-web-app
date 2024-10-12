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
                spaceBetween={12}
                className="w-full px-gg">
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
