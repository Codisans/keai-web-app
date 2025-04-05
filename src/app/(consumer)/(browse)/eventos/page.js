import api from '@/lib/api'
import { EventResults } from './EventResults'
import { NoResultsText } from '@/components/atoms/NoResultsText'
import { UpcomingEvents } from './UpcomingEvents'
import { TodayEvents } from './TodayEvents'
import { ThisWeekendEvents } from './ThisWeekendEvents'
import { ThisWeekEvents } from './ThisWeekEvents'
import { ReccomendedEvents } from './ReccomendedEvents'
import { CategoryEvents } from './CategoryEvents'
import moment from 'moment'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = async ({ searchParams }) => {
    const categories = await api.getCategories()

    const urlSearchParams = new URLSearchParams(searchParams)

    if (urlSearchParams.get('min_date') == null) {
        urlSearchParams.set('min_date', moment().format('YYYY-MM-DD'))
    }

    const events = await api.getEvents(urlSearchParams.toString())

    if (!events || events?.length === 0) return <NoResultsText />

    if (Object.keys(searchParams)?.length !== 0)
        return (
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventResults events={events} />
            </div>
        )

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-6">
                <ReccomendedEvents />
                <UpcomingEvents />
                <TodayEvents />
                <ThisWeekendEvents />
                <ThisWeekEvents />

                {categories?.map((category, i) => (
                    <CategoryEvents key={i} category={category} />
                ))}
            </div>
        </>
    )
}

export default Events
