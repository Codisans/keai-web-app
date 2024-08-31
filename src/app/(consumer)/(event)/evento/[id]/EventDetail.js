'use client'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { useContext, useEffect } from 'react'

export const EventDetail = ({ event }) => {
    const { setSelectedEvent } = useContext(ConsumerContext)

    useEffect(() => {
        // console.log(event)
        setSelectedEvent(event)
        return () => setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col px-gutter pt-gutter pb-12">
            <div className="flex flex-col-reverse">
                <h1 className="text-h1">{event.name}</h1>
                <span className="uppercase text-body text-grey-4 pb-1">
                    {event.province}
                </span>
                <div className="aspect-video relative w-full overflow-hidden rounded-card mb-4">
                    <img
                        className="absolute inset-0 w-full h-full object-cover"
                        src={event.cover}
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 gap-gutter pt-4">
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
                <div className="col-span-12 flex flex-col">
                    <h3 className="text-caps uppercase text-grey-4 pb-2">
                        Direccion
                    </h3>

                    <p className="flex flex-col">
                        {event.full_address.split(',').map((line, i) => (
                            <span
                                key={i}
                                className="after:content-[','] last:after:hidden">
                                {line}
                            </span>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    )
}
