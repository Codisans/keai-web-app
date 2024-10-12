'use client'

import { useEffect, useRef, useState, createContext } from 'react'
import L from 'leaflet'
import { markerIcons } from '@/lib/leaflet'

export const MapContext = createContext({ mapRef: null })

export default function LeafletMap({ children }) {
    const mapRef = useRef(null)
    const deviceRef = useRef(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        mapRef.current = L.map('map', {
            center: [-33.4489, -70.6693],
            zoom: 13,
            zoomControl: false,
            layers: [
                L.tileLayer(
                    'https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png',
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
                    15,
                )
            })
        } else {
            console.warn('Unable to use geolocation services.')
        }

        return () => {
            mapRef.current = null
            deviceRef.current = null
        }
    }, [])

    return (
        <MapContext.Provider value={{ mapRef: mapRef }}>
            <div id="map" className="w-full h-full relative">
                {isReady && children}
            </div>
        </MapContext.Provider>
    )
}
