'use client'

import { markerIcons } from '@/lib/leaflet'
import { useContext, useEffect, useRef } from 'react'
import { MapContext } from './LeafletMap'
import L from 'leaflet'

export const EventMarker = ({ event }) => {
    const { mapRef } = useContext(MapContext)
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
            },
        )

        mapRef.current.addLayer(markerRef.current)

        return () => {
            markerRef.current?.remove()
        }
    }, [mapRef.current])

    return <div className="sr-only">{event?.name}</div>
}
