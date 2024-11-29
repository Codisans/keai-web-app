'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Symbol } from '@/components/atoms/Symbol'
import { _categories } from '@/constants/categories'

export const CategoryCard = ({ category }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const url = `/eventos${'/' + (category?.id || '')}${searchParams ? '?' + searchParams.toString() : ''}`
    const isActive =
        category == null
            ? pathname == '/eventos'
            : pathname.includes(category?.id)

    return (
        <div
            className={`${isActive ? 'active' : ''}  w-max p-2 flex flex-col gap-1 items-center relative bg-white text-category active:text-white active:bg-category rounded-card`}
            style={{
                '--category-color': _categories[category?.slug]?.color,
            }}>
            <Symbol className="w-8 h-8" name={category?.slug} />
            <h2 className="text-small font-tenorite text-black active:text-white text-wrap text-center uppercase">
                {category?.name || 'Todos'}
            </h2>
            <Link
                href={url}
                className="absolute inset-0 active:pointer-events-none">
                <span className="sr-only">{category?.name || 'Todos'}</span>
            </Link>
        </div>
    )
}

export const CategoryCardFallback = () => {
    return (
        <div className="w-max p-2 flex flex-col gap-1 items-center relative bg-white text-black/20 rounded-card">
            <Symbol className="w-8 h-8" name="logotype" />
            <span className="text-small font-tenorite text-black active:text-white text-wrap text-center uppercase">
                Keai
            </span>
        </div>
    )
}
