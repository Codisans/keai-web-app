'use client'

import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useEffect } from 'react'

export const GoogleMaps = ({ apiKey, position, children }) => {
    return (
        <APIProvider apiKey={apiKey}>
            <Map
                id={'map'}
                defaultCenter={position}
                defaultZoom={12}
                disableDefaultUI={true}
                on
                minZoom={10}
                maxZoom={20}
                mapId="d34b4647d4fcb0c">
                {children}
            </Map>
            <MapControls />
        </APIProvider>
    )
}

export const MapControls = () => {
    const map = useMap('map')

    useEffect(() => {
        if (!map) return

        if ('geolocation' in navigator) {
            console.log('location available')
            navigator.geolocation.getCurrentPosition(position => {
                console.log(map)
                map?.setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            })
            /* geolocation is available */
        } else {
            /* geolocation IS NOT available */
        }
    }, [map])

    return (
        <div className="absolute z-10 top-gg right-gg flex flex-col gap-gg text-icon">
            <button
                className="bg-white text-black rounded p-1.5 border-grey-3 border"
                onClick={() => map?.setZoom(map?.getZoom() + 1)}>
                <AddIcon />
            </button>
            <button
                className="bg-white text-black rounded p-1.5 border-grey-3 border"
                onClick={() => map?.setZoom(map?.getZoom() - 1)}>
                <RemoveIcon />
            </button>
        </div>
    )
}
