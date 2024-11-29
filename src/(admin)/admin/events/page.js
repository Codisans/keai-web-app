import { EventListing } from './EventListing'
import { Loading } from '@/app/Loading'
import api from '@/lib/api'

export const metadata = {
    title: 'KEAI Admin | Events',
}

const AdminEvents = async () => {
    const events = await api.getEvents()

    if (!events) return <Loading />

    return (
        <div className="w-full h-full">
            <section className="py-3 w-full px-gg h-max">
                <h1>Events</h1>
            </section>
            <EventListing events={events.data} />
        </div>
    )
}

export default AdminEvents
