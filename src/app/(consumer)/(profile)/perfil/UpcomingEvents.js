'use client'

import { EventCard } from '@/components/molecules/EventCard'
import { useUserEvents } from '@/hooks/userEvents'
import moment from 'moment'
import { useEffect, useState } from 'react'

export const UpcomingEvents = () => {
    const { userEvents } = useUserEvents()
    const [events, setEvents] = useState([])

    useEffect(() => {
        const filteredEvents = userEvents
            ?.filter(e => moment(e.end_date).isAfter(moment()))
            .sort((a, b) => moment(a.start_date).diff(moment(b.start_date)))
        setEvents(filteredEvents)
    }, [userEvents])

    return (
        <ul className="w-full flex flex-col">
            {events?.map((event, i) => (
                <li
                    className="w-full border-t border-grey py-grid-gap first:border-t-0"
                    key={i}>
                    <EventCard event={event} type="list" remove={true} />
                </li>
            ))}
        </ul>
    )
}
