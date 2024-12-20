'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Suspense, useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Symbol } from '@/components/atoms/Symbol'
import { _categories } from '@/constants/categories'
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
                className="w-full px-gg">
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
    const searchParams = useSearchParams()
    const path = usePathname()

    const parentPath = path.includes('/mapa') ? '/mapa' : '/eventos'
    const url = category
        ? `${parentPath}/${category?.id}${searchParams.size > 0 ? `?${searchParams.toString()}` : ''}`
        : `${parentPath}${searchParams.size > 0 ? `?${searchParams.toString()}` : ''}`
    const categoryId =
        path.includes('/mapa/') || path.includes('/eventos/')
            ? path.split('/').pop()
            : null

    return (
        <div
            className={`relative w-max flex-nowrap flex gap-1 items-center text-white rounded bg-category px-1.5 py-1 border-2 border-category before:absolute before:inset-0 before:rounded-[0.45rem] before:hidden before:border-2 before:border-white active:before:block ${categoryId == (category?.id || null) ? 'active' : ''}`}
            style={{
                '--category-color': _categories[category?.slug]?.color,
            }}>
            <span>{category?.name || 'Todos'}</span>
            <Symbol className="flex-none block w-4 h-4" name={category?.slug} />
            <Link href={url} className="absolute inset-0">
                <span className="sr-only">{category?.name}</span>
            </Link>
        </div>
    )
}

export const CategoryCardFallback = () => {
    return (
        <div className="relative w-max flex-nowrap flex gap-1 items-center text-white rounded bg-primary px-1.5 py-1 border-2 border-primary">
            <span>Keai</span>
            <Symbol className="flex-none block w-4 h-4" name="logotype" />
        </div>
    )
}
