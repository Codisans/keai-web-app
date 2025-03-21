'use client'

import { DateTime } from '@/components/atoms/DateTime'
import { useClickOutside } from '@/hooks/useClickOutside'
import Link from 'next/link'
import { useContext, useRef } from 'react'
import { MapContext } from './LeafletMap'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Price } from '@/components/atoms/Price'

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
                className="fixed bottom-14 inset-x-2 rounded-ui bg-white p-1 z-50 flex gap-3 border border-grey">
                <Image
                    className="w-24 h-24 object-cover rounded-card"
                    src={event.cover || '/placeholder.jpg'}
                    width={96}
                    height={96}
                    alt={event.name}
                />
                <div className="flex flex-col gap-1 grow p-1">
                    <h3 className="text-h3">{event.name}</h3>
                    <dl className="text-sm text-gray-500 flex gap-1">
                        <DateTime value={event.start_date} />
                        <DateTime value={event.start_date} format="time" />
                    </dl>
                    <div className="mt-auto flex justify-end items-end">
                        <Price
                            className="font-bold"
                            value={event.price}
                            preprend="Desde: "
                        />
                    </div>
                </div>
                <Link href={`/evento/${event.id}`} className="absolute inset-0">
                    <span className="sr-only">{event.name}</span>
                </Link>
            </div>
        )
    )
}
