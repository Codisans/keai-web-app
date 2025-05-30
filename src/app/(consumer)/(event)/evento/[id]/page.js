import { EventDetail } from './EventDetail'
import { EventFooter } from './EventFooter'
import { EventHeader } from './EventHeader'
import api from '@/lib/api'

export async function generateMetadata(
    { params }
  ) {
    // read route params
    const event = await api.getEvent(params.id)
   
    return {
      title: `${event.name} | KEAI`,
      description: event.description,
    }
  }

const Event = async ({ params }) => {
    const event = await api.getEvent(params.id)

    return (
        <>
            <EventHeader eventId={params.id} />
            <main className="w-full bg-white-true grow">
                <EventDetail event={event} />
            </main>
            <EventFooter event={event} />
        </>
    )
}

export default Event
