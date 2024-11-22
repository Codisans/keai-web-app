import api from '@/lib/api'
import { EventMarker } from '../EventMarker'
import { EventURLSearchParams } from '@/utils/EventURLSearchParams'

export const metadata = {
    title: 'KEAI | Mapa ',
}

const MapCategory = async ({ params, searchParams }) => {
    const urlSearchParams = new EventURLSearchParams(
        searchParams
            ? {
                  categories: [params.category],
                  ...searchParams,
              }
            : { categories: [params.category] },
    )
    const events = await api.getEvents(urlSearchParams.toMapString())

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
