'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CategoryCard, CategoryCardFallback } from './CategoryCard'
import { _categories } from '@/constants/categories'
import { Suspense } from 'react'

export const CategoryNav = ({ categories }) => {
    if (!categories) return

    const cateogryList = categories
        .filter(c => Object.keys(_categories).includes(c.slug))
        ?.sort((a, b) => _categories[a.slug].order - _categories[b.slug].order)

    return (
        <nav className="pt-gg">
            <Swiper
                freeMode={true}
                slidesPerView="auto"
                modules={[FreeMode]}
                spaceBetween={0}
                className="w-full px-gg items-end">
                <SwiperSlide style={{ width: 'max-content' }}>
                    <Suspense fallback={<CategoryCardFallback />}>
                        <CategoryCard />
                    </Suspense>
                </SwiperSlide>
                {cateogryList?.map((category, i) => (
                    <SwiperSlide key={i} style={{ width: 'max-content' }}>
                        <Suspense fallback={<CategoryCardFallback />}>
                            <CategoryCard category={category} />
                        </Suspense>
                    </SwiperSlide>
                ))}
            </Swiper>
        </nav>
    )
}
