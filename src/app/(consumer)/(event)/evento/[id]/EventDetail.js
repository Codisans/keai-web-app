'use client'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { ClipboardCopy } from '@/components/atoms/ClipboardCopy'
import { useContext, useEffect } from 'react'

export const EventDetail = ({ event }) => {
    const { setSelectedEvent } = useContext(ConsumerContext)

    useEffect(() => {
        console.log(event)
        setSelectedEvent(event)
        return () => setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col pb-12 px-gg pt-gg">
            <div className="flex flex-col-reverse">
                <h1 className="text-h1">{event.name}</h1>
                <span className="pb-1 uppercase text-body text-grey-4">
                    {event.province}
                </span>
                <div className="relative w-full mb-4 overflow-hidden aspect-video rounded-card">
                    <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src={event.cover}
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 pt-4 gap-gg">
                <ul className="col-span-12 flex gap-1.5 text-caps uppercase">
                    {event.tags?.map((tag, i) => (
                        <li
                            key={i}
                            className="py-0.5 px-1.5 bg-grey-4 text-white rounded">
                            {tag.name}
                        </li>
                    ))}
                </ul>
                <div className="col-span-12 py-4">
                    <p>{event.description}</p>
                </div>
                <div className="flex flex-col col-span-12">
                    <div className="flex gap-2">
                        <h3 className="pb-2 uppercase text-caps text-grey-4">
                            Direccion
                        </h3>
                        <ClipboardCopy text={event.formatted_address} />
                    </div>

                    <p className="flex flex-col">
                        <span>
                            {event.street_number} {event.street},
                        </span>
                        <span>{event.province},</span>
                        <span>{event.city}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
