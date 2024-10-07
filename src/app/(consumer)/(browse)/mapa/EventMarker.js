'use client'

import { keaiMarker } from '@/lib/leaflet'
import { Marker } from 'react-leaflet'

export const EventMarker = ({ event }) => {
    if (!event.coordinates) return

    return (
        <Marker
            icon={keaiMarker}
            position={[
                event.coordinates[0]?.latitude,
                event.coordinates[1]?.longitude,
            ]}
        />
    )
}
