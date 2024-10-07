'use client'

import { useEffect, useState } from 'react'
import { deviceLocationMarker } from '@/lib/leaflet'
import { Marker } from 'react-leaflet/Marker'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'

export default function LeafletMap({ children }) {
    return (
        <MapContainer
            className="map w-full h-full relative"
            zoom={13}
            zoomControl={false}
            controls={false}
            center={[-33.4489, -70.6693]}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.openstreetmap.cat" target="_blank">Breton OpenStreetMap Team</a>'
                url="https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png"
            />
            <MapController>{children}</MapController>
        </MapContainer>
    )
}

export const MapController = ({ children }) => {
    const [deviceLocation, setDeviceLocation] = useState(null)
    const map = useMap()

    useEffect(() => {
        if (!map) return

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                setDeviceLocation([
                    position.coords.latitude,
                    position.coords.longitude,
                ])
                map.setView(
                    [position.coords.latitude, position.coords.longitude],
                    15,
                )
            })
        } else {
            console.warn('Unable to use geolocation services.')
        }
    }, [])

    return (
        <>
            {deviceLocation && (
                <Marker position={deviceLocation} icon={deviceLocationMarker} />
            )}
            {children}
        </>
    )
}
