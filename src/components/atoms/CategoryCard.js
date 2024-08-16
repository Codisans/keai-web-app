'use client'
import EventIcon from '@mui/icons-material/Event'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const CategoryCard = ({ category }) => {
    const path = usePathname()
    const isMap = path.split('/').includes('mapa')
    const parent = isMap ? 'mapa' : 'eventos'
    const url = category ? `/${parent}/${category.id}` : `/${parent}`

    return (
        <div
            className={`${path == url ? 'active' : ''} active:text-black text-black/60 active:after:block flex flex-col gap-1 items-center relative w-full after:black after:absolute after:bg-black after:bottom-0 after:h-[0.35rem] after:w-6 after:left-1/2 after:-translate-x-1/2 rounded-card after:hidden pt-2 pb-4`}>
            <EventIcon fontSize="large" />
            <h2 className="text-small text-black text-wrap text-center max-h-[1em] overflow-hidden">
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
