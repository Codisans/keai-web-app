'use client'

import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'
import { EventCarousel } from './EventCarousel'

export const ReccomendedEvents = () => {
    const { events } = useApi()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (!events) return

        setItems(events?.slice(0, 20))
    }, [events])

    return <EventCarousel heading="Recomendados para ti" events={items} />
}
