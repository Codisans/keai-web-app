'use client'

import { DateTime } from '@/components/atoms/DateTime'
import { useClickOutside } from '@/hooks/useClickOutside'
import Link from 'next/link'
import { useContext, useRef } from 'react'
import { MapContext } from './LeafletMap'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CategoryColorBar } from '@/components/atoms/CategoryColorBar'

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
                className="fixed bottom-[4.8rem] inset-x-2 rounded-ui bg-white p-1 z-50 flex gap-3 border border-grey">
                <div className="flex-none w-24 h-max rounded overflow-hidden">
                    <img
                        className="w-24 h-24 object-cover"
                        src={event.cover || '/placeholder.jpg'}
                        alt={event.name}
                    />
                    <CategoryColorBar categories={event.categories} />
                </div>
                <div className="flex flex-col grow p-1">
                    <h3 className="text-h-card">{event.name}</h3>
                    <dl className="typo-obdy uppercase font-medium leading-[1] tracking-[0.4px] text-gray-500 flex gap-1 justify-between">
                        <dd>
                            <DateTime date={event.start_date} />
                        </dd>
                        <dd>
                            <DateTime date={event.start_date} format="time" />
                        </dd>
                    </dl>
                    <ul className="flex flex-wrap gap-x-2 gap-y-1 pt-2">
                        {event.tags?.map(tag => (
                            <li className="tag" key={tag.id}>
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
