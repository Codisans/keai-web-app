import api from '@/lib/api'
import { EventMarker } from '../EventMarker'
import moment from 'moment'
export const metadata = {
    title: 'keai | Mapa ',
}

const MapCategory = async props => {
    const searchParams = await props.searchParams
    const params = await props.params
    const urlSearchParams = new URLSearchParams(searchParams)

    urlSearchParams.set('categories[]', params.category)

    if (
        urlSearchParams.get('min_date') == null &&
        urlSearchParams.get('max_date') == null
    ) {
        urlSearchParams.set('min_date', moment().format('YYYY-MM-DD'))
        urlSearchParams.set('max_date', moment().day(7).format('YYYY-MM-DD'))
    }

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
