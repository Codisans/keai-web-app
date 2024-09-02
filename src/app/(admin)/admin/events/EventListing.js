'use client'

import { Loading } from '@/app/Loading'
import { useEffect } from 'react'

export const EventListing = ({ events }) => {
    useEffect(() => {
        console.log(events[0])
    }, [events])

    return (
        <div className="w-full grow relative">
            <ul className="sticky top-0 grid grid-cols-8 bg-white py-1.5 px-gutter border-b border-grey font-bold">
                <li className="col-span-1">id</li>
                <li className="col-span-2">Categories</li>
                <li className="col-span-3">Name</li>
                <li className="col-span-2">Date</li>
            </ul>
            {events ? (
                <ul className="">
                    {events?.map((event, i) => (
                        <EventRow key={i} event={event} />
                    ))}
                </ul>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export const EventRow = ({ event }) => {
    return (
        <li className="grid grid-cols-8 px-gutter py-1.5 border-b border-grey">
            <span className="col-span-1">{event.id}</span>
            <span className="col-span-2">
                {event.categories.map(c => c.name).join(', ')}
            </span>
            <span className="col-span-3">{event.name}</span>
            <span className="col-span-2">
                {new Date(event.start_date).toDateString()}
            </span>
        </li>
    )
}
