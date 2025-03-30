'use client'

import Link from 'next/link'
import { EventCarousel } from './EventCarousel'
import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'

export const CategoryEvents = ({ category, className = '' }) => {
    const { events } = useApi()

    const [categoryEvents, setCategoryEvents] = useState([])

    useEffect(() => {
        console.log(category, events)
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
            heading={
                <span
                    className={`theme--${category.slug} bg-theme text-white px-1 rounded-button`}>
                    {category.name}
                </span>
            }
            link={
                <Link
                    className="typo-caps underline"
                    href={`/eventos/${category.id}`}>
                    Ver mas
                </Link>
            }
            events={categoryEvents}
        />
    )
}
