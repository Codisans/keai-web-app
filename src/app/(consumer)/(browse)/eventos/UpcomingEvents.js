'use client'

import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'
import { EventCarousel } from './EventCarousel'

export const UpcomingEvents = () => {
    const { events } = useApi()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (!events) return
        console.log(events)

        setItems(
            events
                ?.sort(
                    (a, b) => new Date(a.start_date) - new Date(b.start_date),
                )
                .slice(0, 20),
        )
    }, [events])

    return <EventCarousel heading="Proximos eventos" events={items} />
}
