import { Loading } from '@/app/Loading'
import { EventMarker } from './EventMarker'
import api from '@/lib/api'
import moment from 'moment'
// import { TestBlock } from '@/components/atoms/TestBlock'

export const metadata = {
    title: 'KEAI | Mapa',
}

const MapPage = async ({ searchParams }) => {
    const urlSearchParams = new URLSearchParams(searchParams)

    if (
        urlSearchParams.get('min_date') == null &&
        urlSearchParams.get('max_date') == null
    ) {
        urlSearchParams.set('min_date', moment().format('YYYY-MM-DD'))
        urlSearchParams.set('max_date', moment().day(7).format('YYYY-MM-DD'))
    }

    const events = await api.getEvents(urlSearchParams.toString())

    if (!events)
        return (
            <div className="absolute translate-x-0 bottom-grid-gap right-grid-gap w-16 h-16 z-10 pointer-events-none">
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

export default MapPage
