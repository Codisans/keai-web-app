'use client'

import { useContext, useEffect, useRef } from 'react'
import { MapContext } from './LeafletMap'
import L from 'leaflet'
import { useRouter } from 'next/navigation'
import { Icon } from 'leaflet'

export const EventMarker = ({ event, targetEvent = false }) => {
    const { mapRef, activeEvent, setActiveEvent, activeMarkerRef } =
        useContext(MapContext)
    const router = useRouter()
    const markerRef = useRef(null)

    const icon = new Icon({
        iconUrl: event.categories[0]?.svg_idenftifier || 'keai-logotype.svg',
        iconSize: [24, 24],
        iconAnchor: [12, 30],
        shadowUrl: '/keai-marker-shadow.svg',
        shadowSize: [32, 32],
        shadowAnchor: [16, 32],
    })

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
                icon: icon,
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

        if (event.categories[0]?.color && markerRef.current) {
            markerRef.current?.style?.setProperty(
                '--color-theme',
                event.categories[0]?.color,
            )
        }

        if (targetEvent) {
            clickHandler()
        }

        return () => {
            markerRef.current?.removeEventListener('click', clickHandler)
            markerRef.current?.remove()

            if (activeEvent?.id == event.id) {
                setActiveEvent(null)
            }
        }
    }, [mapRef.current])

    return <div className="sr-only">{event?.name}</div>
}
