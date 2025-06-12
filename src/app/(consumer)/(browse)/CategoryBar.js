'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { Suspense } from 'react'
import {
    CategoryButton,
    CategoryButtonFallback,
} from '@/components/atoms/CategoryButton'
import { useApi } from '@/hooks/api'

export const CategoryBar = ({ view = 'listing' }) => {
    const { categories } = useApi()
    const [emblaRef] = useEmblaCarousel({ dragFree: true })

    if (!categories) return null

    return (
        <nav className="w-full py-2 pointer-events-auto">
            <div className="embla" ref={emblaRef}>
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
