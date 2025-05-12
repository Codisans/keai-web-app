'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Suspense } from 'react'
import { _categories } from '@/constants/categories'
import { CategoryButton, CategoryButtonFallback } from '@/components/atoms/CategoryButton'

export const CategoryBar = ({ categories, view = 'listing' }) => {
    if (!categories) return null

    const cateogryList = categories
        ?.filter(c => Object.keys(_categories).includes(c.slug))
        ?.sort((a, b) => _categories[a.slug].order - _categories[b.slug].order)

    return (
        <nav className="w-full py-3 pointer-events-auto">
            <Swiper
                freeMode={true}
                slidesPerView="auto"
                modules={[FreeMode]}
                spaceBetween={12}
                className="w-full !px-grid-gap">
                <SwiperSlide style={{ width: 'max-content' }}>
                    <Suspense fallback={<CategoryButtonFallback />}>
                        <CategoryButton view={view} />
                    </Suspense>
                </SwiperSlide>
                {cateogryList?.map((category, i) => (
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