import { getEvents } from '@/api/getEvents'
import EventList from '@/components/molecules/EventList'

export const metadata = {
    title: 'KEAI | Favoritos',
}

const Favourites = async () => {
    const events = await getEvents()
    return (
        <section className="flex flex-col p-gutter grow overflow-y-auto">
            <EventList events={events.data} />
        </section>
    )
}

export default Favourites
