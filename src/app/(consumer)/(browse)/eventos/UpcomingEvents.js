'use client'

import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'
import { EventCarousel } from './EventCarousel'

export const UpcomingEvents = ({ category = null }) => {
    const { events } = useApi()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (!events) return

        let results = []

        if (category) {
            results = events.filter(event =>
                event.categories.some(c => c.id === parseInt(category)),
            )
        } else {
            results = events
        }

        setItems(results?.slice(0, 20))
    }, [events])

    return <EventCarousel heading="Proximos eventos" events={items} />
}
