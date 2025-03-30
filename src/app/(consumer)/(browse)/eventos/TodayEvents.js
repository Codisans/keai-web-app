'use client'

import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'
import { EventCarousel } from './EventCarousel'
import moment from 'moment'

export const TodayEvents = () => {
    const { events } = useApi()
    const [items, setItems] = useState([])

    useEffect(() => {
        if (!events) return
        const today = moment().format('YYYY-MM-DD')
        const todayEvents = events.filter(
            event => moment(event.start_date).format('YYYY-MM-DD') === today,
        )

        setItems(todayEvents)
    }, [events])

    return <EventCarousel heading="Hoy" events={items} />
}
