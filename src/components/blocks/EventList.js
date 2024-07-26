'use client'

import { useEffect } from 'react'
import EventCard from '@/components/blocks/EventCard'
import EventsGrid from '@/components/blocks/EventsGrid'

const EventList = props => {
    const { events } = props

    useEffect(() => {
        console.log(events)
    }, [])

    return (
        <EventsGrid>
            {events.map((event, i) => (
                <li className="col-span-6" key={i}>
                    <EventCard data={event} />
                </li>
            ))}
        </EventsGrid>
    )
}

export default EventList
