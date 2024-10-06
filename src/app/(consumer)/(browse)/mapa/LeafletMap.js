'use client'
import { createContext, useEffect, useRef, useState } from 'react'
import Leaflet from 'leaflet'
import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk'
import * as maptilersdk from '@maptiler/sdk'
import '@maptiler/leaflet-maptilersdk'

export const MapContext = createContext({
    map: null,
})

export const LeafletMap = ({ children }) => {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [zoom] = useState(13)
    const [center, setCenter] = useState([-33.4489, -70.6693])

    useEffect(() => {
        if ('geolocation' in navigator) {
            console.log('location available')
            navigator.geolocation.getCurrentPosition(position => {
                setCenter([position.coords.latitude, position.coords.longitude])
                console.log(position, map.current)
            })
            map.current?.setView(Leaflet.latLng(center), zoom)
        } else {
            console.log('no geolocation available')
        }
    }, [])

    useEffect(() => {
        if (map.current) return

        map.current = new Leaflet.Map(mapContainer.current, {
            center: Leaflet.latLng(center),
            zoomControl: false,
            zoom: zoom,
        })

        const mtLayer = new MaptilerLayer({
            apiKey: 'h0z4g95nQhvDSCSKb00w',
            style: maptilersdk.MapStyle.OUTDOOR,
        }).addTo(map.current)

        return () => {
            mtLayer.remove()
        }
    }, [center.lng, center.lat])

    return (
        <MapContext.Provider value={{ map: map?.current }}>
            <div ref={mapContainer} className="map w-full h-full relative">
                {children}
            </div>
        </MapContext.Provider>
    )
}
