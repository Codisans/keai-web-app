import { EventURLSearchParams } from '@/utils/EventURLSearchParams'
import { EventCarousel } from '../EventCarousel'
import api from '@/lib/api'
import { EventResults } from '../EventResults'
import { NoResultsText } from '@/components/atoms/NoResultsText'

export const metadata = {
    title: 'KEAI | Eventos',
}

const CategoryPage = async ({ params, searchParams }) => {
    const urlSearchParams = new EventURLSearchParams(
        searchParams
            ? {
                  categories: [params.category],
                  ...searchParams,
              }
            : { categories: [params.category] },
    )
    const events = await api.getEvents(urlSearchParams.toListString())

    if (!events || events?.length === 0) return <NoResultsText />

    if (Object.keys(searchParams).length !== 0)
        return (
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventResults events={events} />
            </div>
        )

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventCarousel heading="Para ti" events={events} />
                <EventCarousel heading="Hoy" events={events} />
                <EventCarousel heading="Ferias" events={events} />
            </div>
        </>
    )
}

export default CategoryPage
