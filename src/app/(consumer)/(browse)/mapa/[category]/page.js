import api from '@/lib/api'
import { EventMarker } from '../EventMarker'

export const metadata = {
    title: 'KEAI | Mapa ',
}

const MapCategory = async ({ params, searchParams }) => {
    const urlSearchParams = new URLSearchParams(searchParams)

    urlSearchParams.set('categories[]', params.category)

    const events = await api.getEvents(urlSearchParams.toString())

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
