import { api } from '@/lib/api'
import EventList from '@/components/molecules/EventList'

export const metadata = {
    title: 'KEAI | Favoritos historicos',
}

const HistoricFavourites = async () => {
    const events = await api.getEvents()
    return (
        <section className="flex flex-col p-gg grow overflow-y-auto">
            <EventList events={events.data} />
        </section>
    )
}

export default HistoricFavourites
