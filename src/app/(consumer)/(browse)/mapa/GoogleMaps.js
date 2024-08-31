'use client'

import { APIProvider, Map, useMap } from '@vis.gl/react-google-maps'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const GoogleMaps = ({ apiKey, position, children }) => {
    return (
        <APIProvider apiKey={apiKey}>
            <Map
                id={'map'}
                defaultCenter={position}
                defaultZoom={12}
                disableDefaultUI={true}
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

    return (
        <div className="absolute z-10 top-gutter right-gutter flex flex-col gap-gutter text-icon">
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
