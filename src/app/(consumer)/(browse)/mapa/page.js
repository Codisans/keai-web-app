import { Loading } from '@/app/Loading'
import { EventMarker } from './EventMarker'
import api from '@/lib/api'

export const metadata = {
    title: 'KEAI | Mapa',
}

const MapPage = async () => {
    const events = await api.getEvents()

    if (!events)
        return (
            <div className="absolute translate-x-0 bottom-gg right-gg w-16 h-16 z-10 pointer-events-none">
                <Loading />
            </div>
        )

    return (
        <>
            {events?.map((event, i) => (
                <EventMarker key={i} event={event} />
            ))}
        </>
    )
}

export default MapPage
