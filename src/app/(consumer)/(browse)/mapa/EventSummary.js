'use client'

import { DateTime } from '@/components/atoms/DateTime'
import { useClickOutside } from '@/hooks/useClickOutside'
import Link from 'next/link'
import { useContext, useRef } from 'react'
import { MapContext } from './LeafletMap'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'

export const EventSummary = ({ event }) => {
    const eventSummaryRef = useRef(null)
    const { setActiveEvent, activeMarkerRef, activeEvent } =
        useContext(MapContext)
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useClickOutside(eventSummaryRef, e => {
        if (e.target.classList.contains('leaflet-marker-icon')) return

        if (activeMarkerRef.current && activeEvent) {
            setActiveEvent(null)
            activeMarkerRef.current._icon.style.filter = ''
            activeMarkerRef.current = null
        }

        if (e.target.tagName === 'A') return
        router?.push(
            `${pathname}${searchParams.size > 0 ? `?${searchParams.toString()}` : ''}`,
        )
    })

    return (
        event && (
            <div
                ref={eventSummaryRef}
                className="fixed bottom-[4.5rem] left-2 sm:max-w-[420px] flex flex-row right-2 rounded bg-white z-50 border border-grey">
                <div className="flex-none w-1/4 p-1 max-w-32 h-max overflow-hidden">
                    <Image
                        className="aspect-sqaure w-full object-cover rounded-[0.25rem]"
                        src={event.cover}
                        width={96}
                        height={96}
                        alt={event.name}
                    />
                </div>
                <div className="w-3/4 flex flex-col p-1">
                    <dl className="pt-1 typo-date text-xs text-black/80 flex gap-1 justify-between pr-1">
                        <dd>
                            <DateTime date={event.start_date} />
                        </dd>
                        <dd>
                            <DateTime date={event.start_date} format="time" />
                        </dd>
                    </dl>
                    <h3 className="text-md typo-regular py-1.5 w-full overflow-hidden text-ellipsis text-nowrap">
                        {event.name}
                    </h3>
                    <ul className="flex flex-wrap gap-1 max-h-10 overflow-hidden">
                        {event.tags?.map(tag => (
                            <li className="tag-sm" key={tag.id}>
                                {tag.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href={`/evento/${event.id}`} className="absolute inset-0">
                    <span className="sr-only">{event.name}</span>
                </Link>
            </div>
        )
    )
}
