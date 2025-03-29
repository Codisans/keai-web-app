'use client'

import { EventCard } from '@/components/molecules/EventCard'
import { useUser } from '@/hooks/user'
import DeleteIcon from '@mui/icons-material/Delete'
import ShareIcon from '@mui/icons-material/Share'
import { useEffect, useState } from 'react'

export const PastEvents = () => {
    const { details } = useUser()
    const [events, setEvents] = useState([])

    useEffect(() => {
        setEvents(details?.saved_events)
    }, [details])

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
                        <button className="p-1">
                            <DeleteIcon />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
