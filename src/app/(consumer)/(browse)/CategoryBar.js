'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { Suspense, useEffect } from 'react'
import {
    CategoryButton,
    CategoryButtonFallback,
} from '@/components/atoms/CategoryButton'
import { useApi } from '@/hooks/api'
import { usePathname } from 'next/navigation'

export const CategoryBar = ({ view = 'listing' }) => {
    const pathname = usePathname()
    const { categories } = useApi()
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })

    useEffect(() => {
        if (!emblaApi) return

        const target = emblaApi
            .slideNodes()
            .filter(
                node => node.dataset.categoryId === pathname?.split('/')[2],
            )[0]

        if (target) {
            emblaApi?.scrollTo(Number(target.dataset.index))
        }
    }, [pathname, emblaApi])

    if (!categories) return null

    return (
        <nav className="w-full py-2 pointer-events-auto">
            <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container">
                    <div
                        className="embla__slide flex-none pl-2"
                        style={{ width: 'max-content' }}>
                        <Suspense fallback={<CategoryButtonFallback />}>
                            <CategoryButton view={view} />
                        </Suspense>
                    </div>
                    {categories?.map((category, i) => (
                        <div
                            className="embla__slide w-max flex-none pl-2 last:pr-2"
                            key={i}
                            data-index={i}
                            data-category-id={category.id}
                            style={{ width: 'max-content' }}>
                            <Suspense fallback={<CategoryButtonFallback />}>
                                <CategoryButton
                                    category={category}
                                    view={view}
                                />
                            </Suspense>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}
