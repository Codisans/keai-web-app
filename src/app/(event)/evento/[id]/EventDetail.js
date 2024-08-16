'use client'
import { UiContext } from '@/app/AppContext'
import { useContext, useEffect } from 'react'

export const EventDetail = ({ event }) => {
    const { setSelectedEvent } = useContext(UiContext)

    useEffect(() => {
        console.log(event)
        setSelectedEvent(event)
        return () => setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col px-gutter">
            <div className="flex flex-col-reverse">
                <h1 className="text-h1">{event.name}</h1>
                <span className="uppercase text-caps text-grey-4">
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
                <div className="col-span-12 flex gap-1.5 text-caps uppercase pb-3">
                    {event.tags?.map((tag, i) => (
                        <span
                            key={i}
                            className="py-1 px-1.5 bg-grey text-black rounded">
                            {tag.name}
                        </span>
                    ))}
                </div>
                {/* <div className="col-span-3 text-caps uppercase text-right">
                    Fecha:
                </div>
                <div className="col-span-9 text-body">
                    {startDate.toDateString()}
                </div> */}
                {/* <div className="col-span-1 text-caps uppercase text-right">
                    Inicio:
                </div>
                <div className="col-span-1 text-body">
                    {startDate.toTimeString()}
                </div> */}
                <div className="col-span-4 text-caps uppercase text-right">
                    Direccion
                </div>
                <div className="col-span-8 text-body">
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
                <div className="col-span-12">
                    <p className="py-3">{event.description}</p>
                </div>
            </div>
        </div>
    )
}
