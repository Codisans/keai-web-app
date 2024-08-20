'use client'

import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps'
import { useEffect } from 'react'

export const EventMarker = ({ event }) => {
    // useEffect(() => {
    //     console.log(event)
    // }, [event])
    if (event.coordinates == null) return

    const position = {
        lat: event.coordinates[0].latitude,
        lng: event.coordinates[1].longitude,
    }

    return (
        <AdvancedMarker position={position}>
            <Pin background={'#000'} borderColor={'#fff'} glyphColor={'#fff'} />
        </AdvancedMarker>
    )
}

// export const MarkerWithInfoWindow = ({ position }) => {
//     // `markerRef` and `marker` are needed to establish the connection between
//     // the marker and infowindow (if you're using the Marker component, you
//     // can use the `useMarkerRef` hook instead).
//     const [markerRef, marker] = useAdvancedMarkerRef()

//     const [infoWindowShown, setInfoWindowShown] = useState(false)

//     // clicking the marker will toggle the infowindow
//     const handleMarkerClick = useCallback(
//         () => setInfoWindowShown(isShown => !isShown),
//         [],
//     )

//     // if the maps api closes the infowindow, we have to synchronize our state
//     const handleClose = useCallback(() => setInfoWindowShown(false), [])

//     return (
//         <>
//             <AdvancedMarker
//                 ref={markerRef}
//                 position={position}
//                 onClick={handleMarkerClick}
//             />

//             {infoWindowShown && (
//                 <InfoWindow anchor={marker} onClose={handleClose}>
//                     <h2>InfoWindow content!</h2>
//                     <p>
//                         Some arbitrary html to be rendered into the InfoWindow.
//                     </p>
//                 </InfoWindow>
//             )}
//         </>
//     )
// }
