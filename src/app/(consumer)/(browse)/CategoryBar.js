'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Suspense } from 'react'
import {
    CategoryButton,
    CategoryButtonFallback,
} from '@/components/atoms/CategoryButton'
import { useApi } from '@/hooks/api'

export const CategoryBar = ({ view = 'listing' }) => {
    const { categories } = useApi()

    if (!categories) return null

    return (
        <nav className="w-full py-2 pointer-events-auto">
            <Swiper
                freeMode={true}
                slidesPerView="auto"
                modules={[FreeMode]}
                spaceBetween={8}
                className="w-full !px-grid-gap">
                <SwiperSlide style={{ width: 'max-content' }}>
                    <Suspense fallback={<CategoryButtonFallback />}>
                        <CategoryButton view={view} />
                    </Suspense>
                </SwiperSlide>
                {categories?.map((category, i) => (
                    <SwiperSlide key={i} style={{ width: 'max-content' }}>
                        <Suspense fallback={<CategoryButtonFallback />}>
                            <CategoryButton category={category} view={view} />
                        </Suspense>
                    </SwiperSlide>
                ))}
            </Swiper>
        </nav>
    )
}
