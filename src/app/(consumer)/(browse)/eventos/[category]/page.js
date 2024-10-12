import { EventCarousel } from '@/components/molecules/EventCarousel'
import api from '@/lib/api'

export const metadata = {
    title: 'KEAI | Eventos',
}

const CategoryPage = async ({ params }) => {
    const category = await api.getEvents(params.category)

    if (!category) return

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventCarousel heading="Para ti" events={category.events} />
                <EventCarousel heading="Hoy" events={category.events} />
                <EventCarousel heading="Ferias" events={category.events} />
            </div>
        </>
    )
}

export default CategoryPage
