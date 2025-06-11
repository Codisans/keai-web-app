'use client'

import { Loading } from '@/components/atoms/Loading'
import { EventCard } from '@/components/molecules/EventCard'
import { useUserEvents } from '@/hooks/userEvents'
import moment from 'moment'
import { useEffect, useState } from 'react'

export const UpcomingEvents = () => {
    const { userEvents } = useUserEvents()
    const [events, setEvents] = useState(null)

    useEffect(() => {
        const filteredEvents = userEvents
            ?.filter(e => moment(e.start_date).isAfter(moment()))
            .sort((a, b) => moment(a.start_date).diff(moment(b.start_date)))
        setEvents(filteredEvents)
    }, [userEvents])

    if (!events) return <Loading />

    if (events?.length === 0) {
        return (
            <div className="py-4 flex flex-col gap-y-4 text-center">
                <p className="py-4 px-2 text-black/80 bg-white border-grey typo-button text-xs border rounded-button w-full">
                    No tienes eventos guardados aun!
                </p>
            </div>
        )
    }

    return (
        <ul className="w-full flex flex-col">
            {events?.map((event, i) => (
                <li
                    className="w-full border-t border-grey py-grid-gap first:border-t-0"
                    key={i}>
                    <EventCard
                        event={event}
                        type="list"
                        remove={true}
                        showTags={false}
                    />
                </li>
            ))}
        </ul>
    )
}
