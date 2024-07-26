import Header from '@/app/(app)/Header'
import Tags from './Tags'
import { EventCarousel } from '@/components/blocks/EventCarousel'
import { CategoryCards } from '@/components/blocks/CategoryCards'

export const metadata = {
    title: 'Browse Events',
}

async function getEvents() {
    const res = await fetch('http://localhost:8000/api/events')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

async function getCategories() {
    const res = await fetch('http://localhost:8000/api/categories')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Browse = async () => {
    const events = await getEvents()
    const categories = await getCategories()

    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index
    }

    const tags = events
        .map(event => event.tags)
        .flat()
        .filter(onlyUnique)

    return (
        <>
            <section className="flex">
                <CategoryCards categories={categories} />
            </section>
            <div className="w-full py-12 flex flex-col gap-y-8">
                {/* <Tags data={tags} /> */}
                {/* <EventList data={events} /> */}
                <EventCarousel heading="Para ti" events={events} />
                <EventCarousel heading="Hoy" events={events} />
                <EventCarousel heading="Este fin de semana" events={events} />
                <EventCarousel heading="Fiesta" events={events} />
                <EventCarousel heading="Deportivo" events={events} />
                <EventCarousel heading="Comida" events={events} />
                <EventCarousel heading="Talleres" events={events} />
            </div>
        </>
    )
}

export default Browse
