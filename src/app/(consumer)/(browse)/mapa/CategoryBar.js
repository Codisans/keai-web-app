'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Symbol } from '@/components/atoms/Symbol'

export const CategoryBar = () => {
    const { categories } = useContext(ConsumerContext)

    return (
        <nav className="absolute top-1 inset-x-0 pt-gg z-header">
            <Swiper
                freeMode={true}
                slidesPerView="auto"
                modules={[FreeMode]}
                spaceBetween={12}
                className="w-full px-gg">
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

export const CategoryCard = ({ category }) => {
    const path = usePathname()
    const router = useRouter()
    const { setSelectedCategory } = useContext(ConsumerContext)

    const parentPath = path.includes('/mapa') ? '/mapa' : '/eventos'
    const url = category ? `${parentPath}/${category?.id}` : `${parentPath}`
    const categoryId =
        path.includes('/mapa/') || path.includes('/eventos/')
            ? path.split('/').pop()
            : null

    return (
        <div
            className={`w-max ${categoryId == (category?.id || null) ? 'active' : ''}`}>
            <Link
                href={url}
                onClick={() => {
                    setSelectedCategory(categoryId)
                    router?.push(url)
                }}
                className="bg-white active:bg-black active:text-white shadow rounded-button px-2 py-1 flex flex-nowrap items-center gap-1 active:pointer-events-none">
                <span className="text-nowrap uppercase">
                    {category?.name || 'Todos'}
                </span>
                <CategoryIcon category={category?.id || null} />
            </Link>
        </div>
    )
}

export const CategoryIcon = ({ category }) => {
    switch (category) {
        default:
            return (
                <Symbol className="flex-none block w-3 h-3" name="logotype" />
            )
    }
}
