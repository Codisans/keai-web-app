'use client'

import { useEffect, useRef, useState, createContext } from 'react'
import L, { Icon } from 'leaflet'
import { EventSummary } from './EventSummary'

const deviceLocationMarker = new Icon({
    iconUrl: '/device-location-marker.png',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
})

export const MapContext = createContext({
    mapRef: null,
    selectedEvent: null,
    setSelectedEvent: () => {},
    selectedMarkerRef: null,
    targetEvent: null,
    setTargetEvent: () => {},
})

export default function LeafletMap({ children }) {
    const mapRef = useRef(null)
    const deviceRef = useRef(null)
    const [isReady, setIsReady] = useState(false)

    const [selectedEvent, setSelectedEvent] = useState(null)
    const selectedMarkerRef = useRef(null)
    const [targetEvent, setTargetEvent] = useState(null)

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
                        icon: deviceLocationMarker,
                    },
                ).addTo(mapRef.current)

                if (window.location.href.split('#').length <= 1) {
                    mapRef.current?.setView(
                        [position.coords.latitude, position.coords.longitude],
                        12,
                    )
                }
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
                selectedEvent: selectedEvent,
                setSelectedEvent: setSelectedEvent,
                selectedMarkerRef: selectedMarkerRef,
                targetEvent: targetEvent,
                setTargetEvent: setTargetEvent,
            }}>
            <div id="map" className="w-full h-auto relative">
                {isReady && children}
            </div>
            <EventSummary event={selectedEvent} />
        </MapContext.Provider>
    )
}
