'use client'

import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'
import { EventCarousel } from './EventCarousel'
import moment from 'moment'

export const ThisWeekendEvents = () => {
    const { events } = useApi()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (!events) return
        const today = moment()
        const friday = today.day(5)
        const min = today.isBefore(friday) ? today : friday
        const end = today.endOf('week')

        setItems(
            events
                ?.filter(
                    e =>
                        min.isBefore(e.start_date) && end.isAfter(e.start_date),
                )
                .slice(0, 20),
        )
    }, [events])

    return <EventCarousel heading="Este fin de semana" events={items} />
}
