import { EventURLSearchParams } from '@/utils/EventURLSearchParams'
import { EventCarousel } from './EventCarousel'
import api from '@/lib/api'
import { EventResults } from './EventResults'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = async ({ searchParams }) => {
    const urlSearchParams = new EventURLSearchParams(searchParams)
    const events = await api.getEvents(urlSearchParams.toListString())

    if (!events || events?.length === 0)
        return (
            <div className="w-full py-8 flex flex-col gap-y-gutter px-gutter">
                <p>Lo lamentamos!</p>
                <p>
                    No se encuentran eventos segun su busqueda en este momento.
                </p>
            </div>
        )

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
                <EventCarousel heading="Techno" events={events} />
            </div>
        </>
    )
}

export default Events
