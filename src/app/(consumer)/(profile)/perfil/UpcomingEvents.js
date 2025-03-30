'use client'

import { EventCard } from '@/components/molecules/EventCard'
import { useUser } from '@/hooks/user'
import DeleteIcon from '@mui/icons-material/Delete'
import ShareIcon from '@mui/icons-material/Share'
import moment from 'moment'
import { useEffect, useState } from 'react'

export const UpcomingEvents = () => {
    const { details, saveEvent } = useUser()
    const [events, setEvents] = useState([])

    useEffect(() => {
        const filteredEvents = details?.favorite_events
            ?.filter(e => moment(e.end_date).isAfter(moment()))
            .sort((a, b) => moment(a.start_date).diff(moment(b.start_date)))
        setEvents(filteredEvents)
    }, [details])

    const handleDelete = async eventId => {
        await saveEvent(eventId)
        setEvents(details?.favorite_events.filter(e => e.id !== eventId))
    }

    return (
        <ul className="w-full flex flex-col">
            {events?.map((event, i) => (
                <li
                    className="w-full border-t border-grey py-grid-gap first:border-t-0"
                    key={i}>
                    <EventCard event={event} type="list" />
                    <div className="flex items-end gap-grid justify-end text-orange">
                        <button className="p-1">
                            <ShareIcon />
                        </button>
                        <button
                            onClick={() => handleDelete(event.id)}
                            className="p-1">
                            <DeleteIcon />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
