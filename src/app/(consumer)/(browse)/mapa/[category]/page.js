import api from '@/lib/api'
import { EventMarker } from '../EventMarker'
import { EventURLSearchParams } from '@/utils/EventURLSearchParams'

export const metadata = {
    title: 'KEAI | Mapa ',
}

const MapCategory = async ({ params, searchParams }) => {
    const filterParams = await searchParams
    const categoryParams = await params

    const urlSearchParams = new EventURLSearchParams(
        filterParams
            ? {
                  categories: [categoryParams.category],
                  ...filterParams,
              }
            : { categories: [categoryParams.category] },
    )
    const events = await api.getEvents(urlSearchParams.toMapString())

    if (!events)
        return (
            <div className="absolute translate-x-0 bottom-gg right-gg w-16 h-16 z-10 pointer-events-none">
                <Loading />
            </div>
        )

    return (
        <>
            {events?.map(event => (
                <EventMarker key={event.id} event={event} />
            ))}
        </>
    )
}

export default MapCategory
