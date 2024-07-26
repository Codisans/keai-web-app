'use client'
import {
    APIProvider,
    AdvancedMarker,
    ControlPosition,
    Map,
    Marker,
    MapControl,
    Pin,
} from '@vis.gl/react-google-maps'

function GoogleMaps(props) {
    const { apiKey, position } = props

    return (
        <APIProvider apiKey={apiKey}>
            <Map
                defaultCenter={position}
                defaultZoom={12}
                defaultOptions={{
                    fullscreenControl: false,
                }}
                mapId="d34b4647d4fcb0c">
                <MapControl position={ControlPosition.TOP_LEFT}></MapControl>
                <CustomMarker position={position} />
            </Map>
        </APIProvider>
    )
}

function CustomMarker({ position }) {
    return (
        <AdvancedMarker position={position}>
            <Pin background={'#000'} borderColor={'#fff'} glyphColor={'#fff'} />
        </AdvancedMarker>
    )
}

export default GoogleMaps
