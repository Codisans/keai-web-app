import { getEvents } from '@/api/getEvents'
import { EventMarker } from '../EventMarker'

export const metadata = {
    title: 'KEAI | Mapa ',
}

const MapCategory = async ({ params }) => {
    if (params.category == null) return

    const events = await getEvents(params.category)
    const items = Array.isArray(events) ? events : [events]

    if (items == null) return

    return (
        <>
            {items?.map((event, i) => (
                <EventMarker key={i} event={event.data} />
            ))}
        </>
    )
}

export default MapCategory
