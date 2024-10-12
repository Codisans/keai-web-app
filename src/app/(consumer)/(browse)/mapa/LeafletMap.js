'use client'

import { useEffect, useRef } from 'react'
import { deviceLocationMarker } from '@/lib/leaflet'
import L from 'leaflet'
import { createContext } from 'react'

export const MapContext = createContext({ mapRef: null })

export default function LeafletMap({ children }) {
    const mapRef = useRef(null)
    const deviceRef = useRef(null)

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
        })

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                deviceRef.current = L.marker(
                    [position.coords.latitude, position.coords.longitude],
                    {
                        icon: deviceLocationMarker,
                    },
                ).addTo(mapRef.current)

                // mapRef.current?.setView(
                //     [position.coords.latitude, position.coords.longitude],
                //     15,
                // )
            })
        } else {
            console.warn('Unable to use geolocation services.')
        }

        return () => {
            deviceRef.current?.remove()
            mapRef.current?.remove()

            mapRef.current && (mapRef.current = null)
            deviceRef.current && (deviceRef.current = null)
        }
    }, [])

    return (
        <MapContext.Provider value={{ mapRef: mapRef }}>
            <div id="map" className="w-full h-full relative"></div>
            {children}
        </MapContext.Provider>
    )
}
