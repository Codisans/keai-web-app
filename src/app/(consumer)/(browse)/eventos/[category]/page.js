import { EventCarousel } from '../EventCarousel'
import { EventResults } from '../EventResults'
import api from '@/lib/api'
import moment from 'moment'

export const metadata = {
    title: 'KEAI | Eventos',
}

const CategoryPage = async ({ params, searchParams }) => {
    const urlSearchParams = new URLSearchParams(searchParams)

    if (urlSearchParams.get('min_date') == null) {
        urlSearchParams.set('min_date', moment().format('YYYY-MM-DD'))
    }

    urlSearchParams.set('categories[]', params.category)

    console.log(urlSearchParams.toString())

    const events = await api.getEvents(urlSearchParams.toString())

    if (Object.keys(searchParams)?.length != 0)
        return (
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventResults events={events} />
            </div>
        )

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-6">
                <EventCarousel heading="Para ti" events={events} />
                <EventCarousel heading="Hoy" events={events} />
                <EventCarousel heading="Ferias" events={events} />
            </div>
        </>
    )
}

export default CategoryPage
