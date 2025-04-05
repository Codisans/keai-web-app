'use client'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { ClipboardCopy } from '@/components/atoms/ClipboardCopy'
import { Price } from '@/components/atoms/Price'
import { useContext, useEffect } from 'react'

export const EventDetail = ({ event }) => {
    const { setSelectedEvent } = useContext(ConsumerContext)

    useEffect(() => {
        console.log(event)
        setSelectedEvent(event)
        return () => setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col pb-12 px-grid-gap pt-grid-gap">
            <div className="flex flex-col-reverse">
                <h1 className="typo-h3">{event.name}</h1>
                <span className="pb-1 uppercase text-body text-grey flex gap-x-2">
                    {event.categories.map((c, i) => (
                        <span className={`pill theme--${c.slug}`} key={i}>
                            {c.name}
                        </span>
                    ))}
                </span>
                <div className="relative w-full mb-4 overflow-hidden aspect-video rounded-card">
                    <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src={event.cover}
                    />
                </div>
            </div>
            <div className="grid grid-cols-12 pt-4 gap-grid">
                <ul className="col-span-12 flex gap-1.5 text-caps uppercase flex-wrap">
                    {event.tags?.map((tag, i) => (
                        <li key={i} className="tag">
                            {tag.name}
                        </li>
                    ))}
                </ul>
                <Price className="py-2" price={event.price} />
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

                    <div className="flex flex-col">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: event.formatted_address,
                            }}
                        />
                    </div>
                </div>
                {/* <div className="col-span-12">
                    <Link href={`/mapa#${event.id}`}>Ver en mapa</Link>
                </div> */}
            </div>
        </div>
    )
}
