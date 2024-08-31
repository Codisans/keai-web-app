import { EventMarker } from './EventMarker'
import { getEvents } from '@/api/getEvents'

export const metadata = {
    title: 'KEAI | Mapa',
}

const MapPage = async () => {
    const events = await getEvents()

    return (
        <>
            {events.data?.map((event, i) => (
                <EventMarker key={i} event={event} />
            ))}
        </>
    )
}

export default MapPage
