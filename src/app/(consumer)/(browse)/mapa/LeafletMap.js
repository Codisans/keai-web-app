'use client'

import { useEffect, useRef, useState, createContext } from 'react'
import L from 'leaflet'
import { markerIcons } from '@/lib/leaflet'
import { EventSummary } from './EventSummary'

export const MapContext = createContext({
    mapRef: null,
    activeEvent: null,
    setActiveEvent: () => {},
    activeMarkerRef: null,
})

export default function LeafletMap({ children }) {
    const mapRef = useRef(null)
    const deviceRef = useRef(null)
    const [isReady, setIsReady] = useState(false)
    const [activeEvent, setActiveEvent] = useState(null)
    const activeMarkerRef = useRef(null)

    useEffect(() => {
        mapRef.current = L.map('map', {
            center: [-33.4489, -70.6693],
            zoom: 10,
            zoomControl: false,
            layers: [
                L.tileLayer(
                    'https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=aLubrUOI0qXUjCvyXl3vQ1LuXliuWTFUesHv3khs8Itsxx4KicQleQFUarz6QpKe',
                ),
            ],
        }).whenReady(() => setIsReady(true))

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                deviceRef.current = L.marker(
                    [position.coords.latitude, position.coords.longitude],
                    {
                        icon: markerIcons.deviceLocation,
                    },
                ).addTo(mapRef.current)

                mapRef.current?.setView(
                    [position.coords.latitude, position.coords.longitude],
                    12,
                )
            })
        } else {
            console.warn('Unable to use geolocation services.')
        }

        return () => {
            mapRef.current?.off()
            mapRef.current?.remove()
            mapRef.current = null
            deviceRef.current = null
        }
    }, [])

    return (
        <MapContext.Provider
            value={{
                mapRef: mapRef,
                activeEvent: activeEvent,
                setActiveEvent: setActiveEvent,
                activeMarkerRef: activeMarkerRef,
            }}>
            <div id="map" className="w-full h-auto relative">
                {isReady && children}
            </div>
            <EventSummary event={activeEvent} />
        </MapContext.Provider>
    )
}
