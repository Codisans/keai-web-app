'use client'
import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Symbol } from '@/components/atoms/Symbol'
import { _categories } from '@/constants/categories'

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
            className={`${categoryId == (category?.id || null) ? 'active' : ''} p-2 flex flex-col gap-1 items-center relative w-full bg-white text-category active:text-white active:bg-category rounded-card`}
            style={{ '--category-color': _categories[category?.slug]?.color }}>
            <Symbol className="w-8 h-8" name={category?.slug} />
            <h2 className="text-small font-tenorite text-black active:text-white text-wrap text-center uppercase">
                {category?.name || 'Todos'}
            </h2>
            <Link
                href={url}
                onClick={() => {
                    setSelectedCategory(categoryId)
                    router?.push(url)
                }}
                className="absolute inset-0 active:pointer-events-none">
                <span className="sr-only">{category?.name || 'Todos'}</span>
            </Link>
        </div>
    )
}
