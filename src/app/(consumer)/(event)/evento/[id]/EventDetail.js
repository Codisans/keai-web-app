'use client'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { DateTime } from '@/components/atoms/DateTime'
import { ShareLinks } from './ShareLinks'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { Symbol } from '@/components/atoms/Symbol'
import { colorIsDark } from '@/utils/colorIsDark'
import Image from 'next/image'
import ReportEvent from '@/components/atoms/ReportEvent'

export const EventDetail = ({ event }) => {
    const { setSelectedEvent } = useContext(ConsumerContext)
    const isFree = event.price == null || parseInt(event.price) === 0

    useEffect(() => {
        setSelectedEvent(event)
        return () => setSelectedEvent(null)
    }, [])

    return (
        <div className="flex flex-col pb-12 pt-6 relative container">
            <div className="flex flex-col-reverse">
                <h1 className="text-xl font-medium px-gutter">{event.name}</h1>
                <ul className="pb-3 uppercase typo-body text-grey flex gap-1.5 flex-wrap">
                    {event.categories.map((c, i) => {
                        const contrast = colorIsDark(c.color)
                            ? 'text-white'
                            : 'text-black'
                        return (
                            <li
                                className={`tag-lg bg-theme text-theme-contrast ${contrast}`}
                                style={{ '--color-theme': c.color ?? null }}
                                key={i}>
                                {c.name}
                            </li>
                        )
                    })}
                    {event.tags?.map((tag, i) => (
                        <li key={i} className="tag-lg">
                            {tag.name}
                        </li>
                    ))}
                    {isFree && <li className="tag-lg">Gratis</li>}
                </ul>
                <div className="relative w-full mb-2 overflow-hidden aspect-video rounded-card">
                    <Image
                        className="absolute inset-0 object-cover w-full h-full"
                        width={584}
                        height={328}
                        src={event.cover}
                        alt={event.name}
                    />
                </div>
            </div>

            <section className="bg-white text-black border border-gray-300 rounded-2xl overflow-hidden mt-4">
                <div className="typo-date font-medium text-md flex flex-row items-center gap-4 px-4 py-2 border-b border-gray-300">
                    <DateTime
                        className="block"
                        date={event.start_date}
                        format="ddd D MMM"
                    />
                    <span className="text-theme">•</span>
                    <DateTime
                        className="block"
                        date={event.start_date}
                        format="time"
                    />
                </div>
                <div className="flex flex-row gap-x-2 px-4 py-2">
                    <div className="inline-block my-auto">
                        <div
                            className="inline"
                            dangerouslySetInnerHTML={{
                                __html: event.formatted_address,
                            }}
                        />
                    </div>
                    <Link
                        href={`/mapa/#${event.id}`}
                        className="ml-auto relative px-2 -mr-1 flex flex-col gap-y-1 items-center justify-center w-min">
                        <Symbol
                            className="w-8 h-8 text-theme mt-1"
                            name="logotype"
                        />
                        <span className="font-bold text-xs typo-caps leading-tight">
                            Mapa
                        </span>
                    </Link>
                </div>
            </section>

            <div className="flex flex-col gap-y-4 pt-8">
                <div
                    dangerouslySetInnerHTML={{
                        __html: event.description,
                    }}
                />
            </div>

            <ShareLinks event={event} />

            <ReportEvent
                className="mt-8 w-full flex flex-col gap-y-2 justify-center text-center"
                event={event}
            />
        </div>
    )
}
