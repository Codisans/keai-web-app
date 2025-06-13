'use client'

import { useContext, useEffect, useRef } from 'react'
import { MapContext } from './LeafletMap'
import L, { Icon } from 'leaflet'
import { useRouter } from 'next/navigation'

export const EventMarker = ({ event, targetEvent = false }) => {
    const {
        mapRef,
        selectedEvent,
        selectedMarkerRef,
        setSelectedEvent,
        setTargetEvent,
    } = useContext(MapContext)
    const router = useRouter()
    const markerRef = useRef(null)

    const icon = new Icon({
        className: 'leaflet-marker-icon--category',
        iconUrl: event.categories[0]?.svg_identifier || '/keai-logotype.svg',
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
            if (selectedMarkerRef.current?._icon) {
                selectedMarkerRef.current._icon.style.filter = ''
            }

            router.push(`#${event.id}`)
            mapRef.current.panTo([
                event.coordinates?.latitude,
                event.coordinates?.longitude,
            ])

            selectedMarkerRef.current = markerRef.current
            markerRef.current._icon.style.filter = 'brightness(0.8)'
            setSelectedEvent(event)
        }

        markerRef.current.on('click', clickHandler)

        mapRef.current.addLayer(markerRef.current)
        markerRef.current._icon.setAttribute('id', event.id)

        if (event.categories[0]?.color && markerRef.current) {
            markerRef.current._icon.style.setProperty(
                '--color-theme',
                event.categories[0]?.color,
            )
        }

        if (targetEvent) {
            setTargetEvent(event)
            clickHandler()
        }

        return () => {
            markerRef.current?.removeEventListener('click', clickHandler)
            markerRef.current?.remove()

            if (selectedEvent?.id == event.id) {
                setSelectedEvent(null)
            }
        }
    }, [mapRef.current])

    return <div className="sr-only">{event?.name}</div>
}
