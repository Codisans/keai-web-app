import { EventCarousel } from './EventCarousel'
import api from '@/lib/api'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = async () => {
    const events = await api.getEvents()

    if (!events) return

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventCarousel heading="Para ti" events={events} />
                <EventCarousel heading="Hoy" events={events} />
                <EventCarousel heading="Techno" events={events} />
            </div>
        </>
    )
}

export default Events
