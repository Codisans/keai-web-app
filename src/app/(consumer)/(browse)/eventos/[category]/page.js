import { EventCarousel } from '@/components/molecules/EventCarousel'
import { getEvents } from '@/api/getEvents'
// import { TagSearch } from '@/components/molecules/TagSearch'

export const metadata = {
    title: 'KEAI | Eventos',
}

const CategoryPage = async ({ params }) => {
    const events = await getEvents(params.category)

    if (!events?.data) return

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventCarousel heading="Para ti" events={events.data} />
                <EventCarousel heading="Hoy" events={events.data} />
                <EventCarousel heading="Ferias" events={events.data} />
            </div>
        </>
    )
}

export default CategoryPage
