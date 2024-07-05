'use client'

import EventCard from './EventCard'
import EventsGrid from '@/components/EventsGrid'

const EventList = props => {
    const { data } = props

    return (
        <EventsGrid>
            {data.map((event, i) => (
                <li className="col-span-6" key={i}>
                    <EventCard data={event} />
                </li>
            ))}
        </EventsGrid>
    )
}

export default EventList
