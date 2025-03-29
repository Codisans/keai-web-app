import { EventURLSearchParams } from '@/utils/EventURLSearchParams'
import { EventCarousel } from './EventCarousel'
import api from '@/lib/api'
import { EventResults } from './EventResults'
import { NoResultsText } from '@/components/atoms/NoResultsText'
import Link from 'next/link'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = async ({ searchParams }) => {
    const categories = await api.getCategories()

    const urlSearchParams = new EventURLSearchParams(searchParams)
    const events = await api.getEvents(urlSearchParams.toListString())

    if (!events || events?.length === 0) return <NoResultsText />

    if (Object.keys(searchParams).length !== 0)
        return (
            <div className="w-full py-8 flex flex-col gap-y-gutter filter-open:hidden">
                <EventResults events={events} />
            </div>
        )

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-gutter filter-open:hidden">
                <EventCarousel heading="Para ti" events={events} />
                <EventCarousel heading="Hoy" events={events} />

                {categories?.map((category, i) => (
                    <EventCarousel
                        key={i}
                        heading={category.name}
                        link={
                            <Link
                                className="typo-caps underline"
                                href={`/eventos/${category.id}`}>
                                Ver mas
                            </Link>
                        }
                        events={events}
                    />
                ))}
            </div>
        </>
    )
}

export default Events
