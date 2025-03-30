'use client'

import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'
import { EventCarousel } from './EventCarousel'
import moment from 'moment'

export const ThisWeekEvents = () => {
    const { events } = useApi()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (!events) return
        const today = moment()
        const sunday = today.endOf('week')

        setItems(
            events
                .filter(
                    e =>
                        today.isBefore(moment(e.end_date)) &&
                        sunday.isAfter(moment(e.start_date)),
                )
                .slice(0, 20),
        )
    }, [events])

    return <EventCarousel heading="Esta semana" events={items} />
}
