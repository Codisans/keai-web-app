import api from '@/lib/api'
import { EventMarker } from '../EventMarker'

export const metadata = {
    title: 'KEAI | Mapa ',
}

const MapCategory = async ({ params }) => {
    const events = await api.getEvents({ categories: [params.category] })

    if (!events) return

    return (
        <>
            {events.map(event => (
                <EventMarker key={event.id} event={event} />
            ))}
        </>
    )
}

export default MapCategory
