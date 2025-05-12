'use client'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { ClipboardCopy } from '@/components/atoms/ClipboardCopy'
import { Price } from '@/components/atoms/Price'
import { useContext, useEffect } from 'react'

export const EventDetail = ({ event }) => {
    const { setSelectedEvent } = useContext(ConsumerContext)

    useEffect(() => {
        setSelectedEvent(event)
        return () => setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col pb-12 px-grid-gap pt-grid-gap">
            <div className="flex flex-col-reverse">
                <h1 className="typo-h3">{event.name}</h1>
                <ul className="pb-2 uppercase text-body text-grey flex gap-1.5 flex-wrap">
                    {event.categories.map((c, i) => (
                        <li className={`pill theme--${c.slug}`} key={i}>
                            {c.name}
                        </li>
                    ))}
                    {event.tags?.map((tag, i) => (
                        <li key={i} className="tag">
                            {tag.name}
                        </li>
                    ))}
                </ul>
                <div className="relative w-full mb-4 overflow-hidden aspect-video rounded-card">
                    <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src={event.cover}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-4 py-4">
                <Price className="typo-button block" price={event.price} />
                <div className="flex flex-col">
                    <h3 className="uppercase text-small font-semibold text-grey-dark">
                        Direccion
                    </h3>
                    <div className="inline-block">
                        <div className='inline'
                            dangerouslySetInnerHTML={{
                                __html: event.formatted_address,
                            }}
                            />
                        <ClipboardCopy className='inline ml-2' text={event.formatted_address} />
                    </div>
                </div>
                <p>{event.description}</p>
                {/* <div className="col-span-12">
                    <Link href={`/mapa#${event.id}`}>Ver en mapa</Link>
                </div> */}
            </div>
        </div>
    )
}
