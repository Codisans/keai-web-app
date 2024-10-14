'use client'

import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Symbol } from '@/components/atoms/Symbol'
import { _categories } from '@/constants/categories'
// import Image from 'next/image'

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
            className={`w-max flex-nowrap flex gap-1 items-center text-white rounded bg-category p-1 border-category border-2 active:border-black ${categoryId == (category?.id || null) ? 'active' : ''}`}
            style={{ '--category-color': _categories[category?.slug]?.color }}>
            <span>{category?.name || 'Todos'}</span>
            <Symbol className="flex-none block w-4 h-4" name={category?.slug} />
            <Link
                href={url}
                onClick={() => {
                    setSelectedCategory(categoryId)
                    router?.push(url)
                }}
                className="absolute inset-0">
                <span className="sr-only">{category?.name}</span>
            </Link>
        </div>
    )
}

// export const CategoryIcon = ({ category }) => {
//     switch (category) {
//         default:
//             return (
//                 <Symbol className="flex-none block w-3 h-3" name="logotype" />
//             )
//     }
// }
