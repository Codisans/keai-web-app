import { EventCarousel } from '@/components/molecules/EventCarousel'
import { getEvents } from '@/api/getEvents'
import { TagSearch } from '@/components/molecules/TagSearch'

export const metadata = {
    title: 'KEAI | Eventos',
}

const Events = async () => {
    const events = await getEvents()

    return (
        <>
            <div className="w-full py-4 flex flex-col">
                {/* <TagSearch /> */}
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
