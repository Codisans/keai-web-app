import { EventCarousel } from '@/components/molecules/EventCarousel'
import { getEvents } from '@/api/getEvents'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = async () => {
    const events = await getEvents()

    if (!events?.data) return

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventCarousel heading="Para ti" events={events.data} />
                <EventCarousel heading="Hoy" events={events.data} />
                <EventCarousel heading="Techno" events={events.data} />
            </div>
        </>
    )
}

export default Events
