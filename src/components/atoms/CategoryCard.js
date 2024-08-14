'use client'
import EventIcon from '@mui/icons-material/Event'
import { usePathname } from 'next/navigation'

export const CategoryCard = ({ category }) => {
    const path = usePathname()
    const url = `/eventos/${category.slug}`

    return (
        <div
            className={`${path == url ? 'active' : ''} flex flex-col gap-1 items-center relative w-[5rem]`}>
            <EventIcon fontSize="large" />
            <h2 className="text-small text-wrap text-center">
                {category.name}
            </h2>
            <a
                href={url}
                className="absolute inset-0 active:pointer-events-none">
                <span className="sr-only">{category.name}</span>
            </a>
        </div>
    )
}
