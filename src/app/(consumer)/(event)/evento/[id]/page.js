import { EventDetail } from './EventDetail'
import { EventFooter } from './EventFooter'
import { EventHeader } from './EventHeader'
import api from '@/lib/api'

export async function generateMetadata(
    { params }
  ) {
    const event = await api.getEvent(params.id)
   
    return {
      title: `KEAI | ${event.name}`,
      description: event.description?.slice(0, 155).concat('...'),
      alternates: {
        canonical: `https://keai.cl/evento/${event.id}`,
      },
      openGraph: {
        title: `KEAI | ${event.name}`,
        description: event.description?.slice(0, 155).concat('...'),
        url: `https://keai.cl/evento/${event.id}`,
        locale: 'es_CL',
        type: 'website',
        siteName: 'KEAI',
        images: [{
          url: event.cover,
          width: 256,
          height: 144,
          alt: event.name,
        }],
      },
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
