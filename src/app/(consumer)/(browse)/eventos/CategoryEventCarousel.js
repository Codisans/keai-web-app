'use client'

import Link from 'next/link'
import { EventCarousel } from './EventCarousel'
import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'

export const CategoryEventCarousel = ({
    heading,
    categoryId,
    className = '',
}) => {
    const { events } = useApi()

    const [categoryEvents, setCategoryEvents] = useState([])

    useEffect(() => {
        if (!events || events?.length == 0) return

        const filteredEvents = events.filter(event =>
            event.categories?.map(category => category.id).includes(categoryId),
        )

        setCategoryEvents(filteredEvents)
    }, [events])

    if (!categoryEvents || categoryEvents?.length == 0) return

    return (
        <EventCarousel
            className={className}
            key={categoryId}
            heading={heading}
            link={
                <Link
                    className="typo-caps underline"
                    href={`/eventos/${categoryId}`}>
                    Ver mas
                </Link>
            }
            events={categoryEvents}
        />
    )
}
