'use client'

import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'
import { EventCarousel } from './EventCarousel'
import { useUserTags } from '@/hooks/userTags'

export const ReccomendedEvents = () => {
    const [items, setItems] = useState([])
    const { userTags } = useUserTags()
    const { events } = useApi()

    useEffect(() => {
        if (!userTags || !events) return

        const tagIds = userTags.map((tag) => tag.id)
        const filteredEvents = events.filter((event) => tagIds.some((id) => event.tags.some((t) => t.id === id)))
        const sortedEvents = filteredEvents.sort((a, b) => {
            const aTags = a.tags.filter((tag) => tagIds.includes(tag.id))
            const bTags = b.tags.filter((tag) => tagIds.includes(tag.id))
            const aIntersectionCount = aTags.length
            const bIntersectionCount = bTags.length
            return bIntersectionCount - aIntersectionCount
        })

        setItems(sortedEvents?.slice(0, 20))
    }, [userTags, events])

    return <EventCarousel heading="Recomendados para ti" events={items} />
}
