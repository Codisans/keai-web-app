import { getEvents } from '@/api/getEvents'
import EventList from '@/components/molecules/EventList'

export const metadata = {
    title: 'KEAI | Favoritos historicos',
}

const HistoricFavourites = async () => {
    const events = await getEvents()
    return (
        <section className="flex flex-col p-gutter grow overflow-y-auto">
            <EventList events={events.data?.slice(5, 20)} />
        </section>
    )
}

export default HistoricFavourites
