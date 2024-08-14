import { EventCarousel } from '@/components/molecules/EventCarousel'
import { getEvents } from '@/api/getEvents'
import { CategoryBar } from '@/components/molecules/CategoryBar'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = async () => {
    const events = await getEvents('pasatiempos')

    return (
        <>
            {/* <CategoryBar /> */}
            <div className="w-full py-12 flex flex-col gap-y-8">
                <EventCarousel heading="Para ti" events={events.data} />
                <EventCarousel heading="Hoy" events={events.data} />
                {/* <Tags data={tags} /> */}
                {/* <EventCarousel heading="Este fin de semana" events={events} /> */}
                {/* <EventCarousel heading="Fiesta" events={events} /> */}
                {/* <EventCarousel heading="Deportivo" events={events} /> */}
                {/* <EventCarousel heading="Comida" events={events} /> */}
                {/* <EventCarousel heading="Talleres" events={events} /> */}
            </div>
        </>
    )
}

export default Events
