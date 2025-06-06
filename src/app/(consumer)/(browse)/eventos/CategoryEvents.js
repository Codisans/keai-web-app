'use client'

import Link from 'next/link'
import { EventCarousel } from './EventCarousel'
import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'

export const CategoryEvents = ({ category, className = '' }) => {
    const { events } = useApi()

    const [categoryEvents, setCategoryEvents] = useState([])

    useEffect(() => {
        if (!events || events?.length == 0 || !category) return

        const filteredEvents = events.filter(event =>
            event.categories?.map(c => c.id).includes(category.id),
        )

        setCategoryEvents(filteredEvents)
    }, [events])

    return (
        <EventCarousel
            className={className}
            key={category.id}
            heading={category.name}
            theme={category.slug}
            link={
                <Link
                    className="typo-caps text-xs underline block"
                    href={`/eventos/${category.id}`}>
                    Ver mas
                </Link>
            }
            events={categoryEvents}
        />
    )
}
