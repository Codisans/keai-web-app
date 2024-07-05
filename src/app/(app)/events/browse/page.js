import Header from '@/app/(app)/Header'
import EventList from './EventList'
import Tags from './Tags'

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

const Browse = async () => {
    const events = await getEvents()

    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index
    }

    const tags = events
        .map(event => event.tags)
        .flat()
        .filter(onlyUnique)

    return (
        <div className="h-full w-full overflow-y-auto">
            <Tags data={tags} />
            <div className="w-full py-12">
                <EventList data={events} />
            </div>
        </div>
    )
}

export default Browse
