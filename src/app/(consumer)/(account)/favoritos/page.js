import { getEvents } from '@/api/getEvents'
import { SavedEvents } from './SavedEvents'

export const metadata = {
    title: 'KEAI | Favoritos',
}

const Favourites = async () => {
    const events = await getEvents()
    return (
        <section className="flex flex-col p-gutter grow overflow-y-auto">
            <SavedEvents events={events.data} />
        </section>
    )
}

export default Favourites
