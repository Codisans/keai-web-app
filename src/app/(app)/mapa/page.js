import { EventMarker } from './EventMarker'
import { GoogleMaps } from './GoogleMaps'
import { getEvents } from '@/api/getEvents'

export const metadata = {
    title: 'KEAI | Mapa',
}

const MapPage = async () => {
    const events = await getEvents()

    return (
        // <GoogleMaps
        //     events={events.data}
        //     apiKey={process.env.GOOGLE_CLOUD_API_KEY}
        //     position={{ lat: -33.4489, lng: -70.6693 }}>
        <>
            {events.data?.map(event => (
                <EventMarker event={event} />
            ))}
        </>
    )
}

export default MapPage
