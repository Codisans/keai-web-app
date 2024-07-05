'use client'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

function GoogleMaps(props) {
    const { apiKey, position } = props

    return (
        <APIProvider apiKey={apiKey}>
            <Map defaultCenter={position} defaultZoom={12}>
                <Marker position={position} />
            </Map>
        </APIProvider>
    )
}

export default GoogleMaps
