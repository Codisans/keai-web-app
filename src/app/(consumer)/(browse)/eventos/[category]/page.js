import { EventURLSearchParams } from '@/utils/EventURLSearchParams'
import { EventCarousel } from '../EventCarousel'
import api from '@/lib/api'
import { EventResults } from '../EventResults'
import { NoResultsText } from '@/components/atoms/NoResultsText'
import moment from 'moment'

export const metadata = {
    title: 'KEAI | Eventos',
}

const CategoryPage = async ({ params, searchParams }) => {
    const urlSearchParams = new URLSearchParams(searchParams)

    urlSearchParams.append('categories[]', params.category)

    if (urlSearchParams.get('min_date') == null) {
        urlSearchParams.set('min_date', moment().format('YYYY-MM-DD'))
    }

    const events = await api.getEvents(urlSearchParams.toString())

    if (!events || events?.length === 0) return <NoResultsText />

    if (Object.keys(searchParams).length !== 0)
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
