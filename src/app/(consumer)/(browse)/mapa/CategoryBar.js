'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Suspense, useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { Symbol } from '@/components/atoms/Symbol'
import { _categories } from '@/constants/categories'
import { NavLink } from '@/components/atoms/NavLink'
// import Image from 'next/image'

export const CategoryBar = () => {
    const { categories } = useContext(ConsumerContext)

    const cateogryList = categories
        .filter(c => Object.keys(_categories).includes(c.slug))
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

export const CategoryCard = ({ category }) => {
    return (
        <NavLink
            pathname={category ? `/mapa/${category?.id}` : '/mapa'}
            exactPath={true}
            className={`button-category theme--${category?.slug}`}>
            <span>{category?.name || 'Todos'}</span>
            <Symbol className="flex-none block w-4 h-4" name={category?.slug} />
        </NavLink>
    )
}

export const CategoryCardFallback = () => {
    return (
        <div className="button-category">
            <span>Keai</span>
            <Symbol className="flex-none block w-4 h-4" name="logotype" />
        </div>
    )
}
