'use client'

import { markerIcons } from '@/lib/leaflet'
import { useContext, useEffect, useRef } from 'react'
import { MapContext } from './LeafletMap'
import L from 'leaflet'
import { useRouter } from 'next/navigation'

export const EventMarker = ({ event }) => {
    const { mapRef, activeEvent, setActiveEvent, activeMarkerRef } =
        useContext(MapContext)
    const router = useRouter()
    const markerRef = useRef(null)
    const categorySlug = event.categories[0]?.slug || null

    useEffect(() => {
        if (
            !event.coordinates?.latitude ||
            !event.coordinates?.longitude ||
            !mapRef.current
        )
            return

        markerRef.current = L.marker(
            [event.coordinates?.latitude, event.coordinates?.longitude],
            {
                icon: markerIcons[categorySlug] || markerIcons.keai,
                alt: event.name,
            },
        )

        const clickHandler = () => {
            if (activeMarkerRef.current?._icon) {
                activeMarkerRef.current._icon.style.filter = ''
            }

            router.push(`#${event.id}`)
            markerRef.current._icon.style.filter = 'brightness(0.8)'
            mapRef.current.panTo([
                event.coordinates?.latitude,
                event.coordinates?.longitude,
            ])

            activeMarkerRef.current = markerRef.current
            setActiveEvent(event)
        }

        markerRef.current.on('click', clickHandler)

        mapRef.current.addLayer(markerRef.current)
        markerRef.current._icon.setAttribute('id', event.id)

        return () => {
            markerRef.current?.removeEventListener('click', clickHandler)
            markerRef.current?.remove()

            if (activeEvent != event) return

            setActiveEvent(null)
        }
    }, [mapRef.current])

    return <div className="sr-only">{event?.name}</div>
}
