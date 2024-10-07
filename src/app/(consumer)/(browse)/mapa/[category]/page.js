import { getEvents } from '@/api/getEvents'
import { EventMarker } from '../EventMarker'

export const metadata = {
    title: 'KEAI | Mapa ',
}

const MapCategory = async ({ params }) => {
    if (params.category == null) return

    const events = await getEvents(params.category)

    if (!events?.data) return

    const items = Array.isArray(events.data) ? events.data : [events.data]

    return (
        <>
            {items.map((event, i) => (
                <EventMarker key={i} event={event} />
            ))}
        </>
    )
}

export default MapCategory
