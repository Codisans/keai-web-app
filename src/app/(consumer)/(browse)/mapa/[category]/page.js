import api from '@/lib/api'
import { EventMarker } from '../EventMarker'

export const metadata = {
    title: 'KEAI | Mapa ',
}

const MapCategory = async ({ params }) => {
    const category = await api.getEvents(params.category)

    if (!category) return

    return (
        <>
            {category?.events?.map(event => (
                <EventMarker key={event.id} event={event} />
            ))}
        </>
    )
}

export default MapCategory
