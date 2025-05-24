'use client'

import { DateTime } from '@/components/atoms/DateTime'
import { useClickOutside } from '@/hooks/useClickOutside'
import Link from 'next/link'
import { useContext, useRef } from 'react'
import { MapContext } from './LeafletMap'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

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
                className="fixed bottom-[4.5rem] left-2 max-w-[420px] right-2 rounded bg-white p-1 z-50 grid grid-cols-4 gap-2 border border-grey">
                <div className="flex-none col-span-1 h-max rounded-sm overflow-hidden">
                    <img
                        className="aspect-sqaure w-full object-cover"
                        src={event.cover || '/placeholder.jpg'}
                        alt={event.name}
                    />
                </div>
                <div className="col-span-3 flex flex-col p-1">
                    <h3 className="text-sm py-0.5 w-full overflow-hidden text-ellipsis text-nowrap">
                        {event.name}
                    </h3>
                    <ul className="flex flex-wrap gap-x-2 gap-y-1 py-1">
                        {event.tags?.map(tag => (
                            <li className="tag-sm" key={tag.id}>
                                {tag.name}
                            </li>
                        ))}
                    </ul>
                    <dl className="typo-date text-sm text-black/80 flex gap-1 justify-between mt-auto">
                        <dd>
                            <DateTime date={event.start_date} />
                        </dd>
                        <dd>
                            <DateTime date={event.start_date} format="time" />
                        </dd>
                    </dl>
                </div>
                <Link href={`/evento/${event.id}`} className="absolute inset-0">
                    <span className="sr-only">{event.name}</span>
                </Link>
            </div>
        )
    )
}
