'use client'

import { categories } from '@/constants/categories'
import { keaiMarker } from '@/lib/leaflet'
import { Marker } from 'react-leaflet'

export const EventMarker = ({ key, event }) => {
    if (!event.coordinates?.latitude || !event.coordinates?.longitude) return

    const categorySlug = event.categories?.pop()?.slug || null

    return (
        <Marker
            key={key}
            icon={categories[categorySlug]?.marker || keaiMarker}
            position={[
                event.coordinates?.latitude,
                event.coordinates?.longitude,
            ]}
        />
    )
}
