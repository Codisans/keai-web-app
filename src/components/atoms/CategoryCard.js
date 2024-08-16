'use client'
import EventIcon from '@mui/icons-material/Event'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const CategoryCard = ({ category }) => {
    const path = usePathname()
    const url = category ? `/eventos/${category.id}` : '/eventos'

    return (
        <div
            className={`${path == url ? 'active' : ''} flex flex-col gap-1 items-center relative w-full rounded-card active:bg-grey p-1`}>
            <EventIcon fontSize="large" />
            <h2 className="text-small text-wrap text-center">
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
