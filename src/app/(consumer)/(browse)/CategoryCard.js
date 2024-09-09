'use client'
import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import EventIcon from '@mui/icons-material/Event'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'

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
            className={`${categoryId == (category?.id || null) ? 'active' : ''} active:text-black text-black/60 active:after:block flex flex-col gap-1 items-center relative w-full after:black after:absolute after:bg-black after:bottom-0 after:h-[0.35rem] after:w-6 after:left-1/2 after:-translate-x-1/2 rounded-card after:hidden pb-3`}>
            <CategoryIcon category={category?.id || null} />
            <h2 className="text-small font-tenorite text-black text-wrap text-center h-[2em] uppercase">
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

export const CategoryIcon = ({ category }) => {
    switch (category) {
        case null:
            return <HomeIcon fontSize="large" />
        default:
            return <EventIcon fontSize="large" />
    }
}
