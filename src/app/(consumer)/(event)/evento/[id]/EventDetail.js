'use client'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { ClipboardCopy } from '@/components/atoms/ClipboardCopy'
import { DateTime } from '@/components/atoms/DateTime'
import { Logo } from '@/components/atoms/Logo'
import { useContext, useEffect } from 'react'

export const EventDetail = ({ event }) => {
    const { setSelectedEvent } = useContext(ConsumerContext)
    const isFree = event.price == null || parseInt(event.price) === 0

    useEffect(() => {
        console.log(event)
        setSelectedEvent(event)
        return () => setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col pb-12 pt-6 relative container">
            <div className="flex flex-col-reverse">
                <h1 className="text-xl font-medium px-gutter">{event.name}</h1>
                <ul className="pb-3 uppercase typo-body text-grey flex gap-1.5 flex-wrap">
                    {isFree && <li className='tag-lg bg-orange'>Gratis</li>}
                    {event.categories.map((c, i) => (
                        <li className={`tag-lg bg-orange`} key={i}>
                            {c.name}
                        </li>
                    ))}
                    {event.tags?.map((tag, i) => (
                        <li key={i} className="tag-lg">
                            {tag.name}
                        </li>
                    ))}
                </ul>
                <div className="relative w-full mb-2 overflow-hidden aspect-video rounded-card">
                    <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src={event.cover}
                    />
                </div>
            </div>

            <section className='bg-white text-black border border-gray-300 rounded-2xl overflow-hidden mt-4'>
                <div className="typo-date font-medium text-md flex flex-row items-center gap-4 px-4 py-2 border-b border-gray-300">
                    <DateTime
                        className="block"
                        date={event.start_date}
                        format="ddd D MMM"
                    />
                    <span className="text-orange">•</span>
                    <DateTime
                        className="block"
                        date={event.start_date}
                        format="time"
                    />
                </div>
                <div className="flex flex-row gap-x-4 px-4 py-2">
                    <Logo className="text-h1 mt-1" type="logotype" />
                    <div className="inline-block">
                        <div className='inline'
                            dangerouslySetInnerHTML={{
                                __html: event.formatted_address,
                            }}
                            />
                        <ClipboardCopy className='inline ml-2' text={event.formatted_address} />
                    </div>
                </div>
            </section>
            
            <div className="flex flex-col gap-y-6 pt-8">
                <p>{event.description}</p>
                {/* <div className="col-span-12">
                    <Link href={`/mapa#${event.id}`}>Ver en mapa</Link>
                </div> */}
            </div>
        </div>
    )
}
