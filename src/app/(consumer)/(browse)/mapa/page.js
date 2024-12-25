import { Loading } from '@/app/Loading'
import { EventMarker } from './EventMarker'
import api from '@/lib/api'
// import { TestBlock } from '@/components/atoms/TestBlock'
import { EventURLSearchParams } from '@/utils/EventURLSearchParams'

export const metadata = {
    title: 'KEAI | Mapa',
}

const MapPage = async ({ searchParams }) => {
    const filterParams = await searchParams
    const urlSearchParams = new EventURLSearchParams(filterParams)
    const events = await api.getEvents(urlSearchParams.toMapString())

    console.error(events, '_____----____')

    if (!events)
        return (
            <div className="absolute translate-x-0 bottom-gg right-gg w-16 h-16 z-10 pointer-events-none">
                <Loading />
            </div>
        )

    return (
        <>
            {events.map(event => (
                <EventMarker key={event.id} event={event} />
            ))}
        </>
    )
}

export default MapPage
