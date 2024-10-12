'use client'

import { categories } from '@/constants/categories'
import { keaiMarker } from '@/lib/leaflet'
import { useContext, useEffect, useRef } from 'react'
import { MapContext } from './LeafletMap'
import L from 'leaflet'

export const EventMarker = ({ event }) => {
    const { mapRef } = useContext(MapContext)
    const markerRef = useRef(null)
    const categorySlug = event.categories?.pop()?.slug || null

    useEffect(() => {
        if (
            !event.coordinates?.latitude ||
            !event.coordinates?.longitude ||
            !mapRef.current
        )
            return

        console.log(event)

        markerRef.current = L.marker(
            [event.coordinates?.latitude, event.coordinates?.longitude],
            {
                icon: categories[categorySlug]?.marker || keaiMarker,
            },
        )

        mapRef.current.addLayer(markerRef.current)

        return () => {
            markerRef.current?.remove()
        }
    }, [mapRef.current])

    return <div className="sr-only">{event?.name}</div>
}
