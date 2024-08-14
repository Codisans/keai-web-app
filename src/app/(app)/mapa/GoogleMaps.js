'use client'
import {
    APIProvider,
    AdvancedMarker,
    ControlPosition,
    Map,
    Marker,
    Pin,
    useMap,
} from '@vis.gl/react-google-maps'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export const GoogleMaps = ({ apiKey, position, events }) => {
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
                <CustomMarker position={position} />
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
                className="bg-white text-black rounded p-1.5"
                onClick={() => map?.setZoom(map?.getZoom() + 1)}>
                <AddIcon />
            </button>
            <button
                className="bg-white text-black rounded p-1.5"
                onClick={() => map?.setZoom(map?.getZoom() - 1)}>
                <RemoveIcon />
            </button>
        </div>
    )
}

export const CustomMarker = ({ position }) => {
    return (
        <AdvancedMarker position={position}>
            <Pin background={'#000'} borderColor={'#fff'} glyphColor={'#fff'} />
        </AdvancedMarker>
    )
}

export const MarkerWithInfoWindow = ({ position }) => {
    // `markerRef` and `marker` are needed to establish the connection between
    // the marker and infowindow (if you're using the Marker component, you
    // can use the `useMarkerRef` hook instead).
    const [markerRef, marker] = useAdvancedMarkerRef()

    const [infoWindowShown, setInfoWindowShown] = useState(false)

    // clicking the marker will toggle the infowindow
    const handleMarkerClick = useCallback(
        () => setInfoWindowShown(isShown => !isShown),
        [],
    )

    // if the maps api closes the infowindow, we have to synchronize our state
    const handleClose = useCallback(() => setInfoWindowShown(false), [])

    return (
        <>
            <AdvancedMarker
                ref={markerRef}
                position={position}
                onClick={handleMarkerClick}
            />

            {infoWindowShown && (
                <InfoWindow anchor={marker} onClose={handleClose}>
                    <h2>InfoWindow content!</h2>
                    <p>
                        Some arbitrary html to be rendered into the InfoWindow.
                    </p>
                </InfoWindow>
            )}
        </>
    )
}
