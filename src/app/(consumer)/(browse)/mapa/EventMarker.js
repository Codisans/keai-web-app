'use client'

import { keaiMarker } from '@/lib/leaflet'
import Leaflet from 'leaflet'
import { useContext, useEffect } from 'react'
import { MapContext } from './LeafletMap'

export const EventMarker = ({ event }) => {
    const { map } = useContext(MapContext)

    useEffect(() => {
        if (event?.coordinates == null || !map) return

        const marker = Leaflet.marker(
            [event.coordinates[0]?.latitude, event.coordinates[1]?.longitude],
            { icon: keaiMarker },
        ).addTo(map)

        return () => {
            marker.remove()
        }
    }, [map])

    return <></>
}
