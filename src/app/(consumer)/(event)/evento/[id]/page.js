import { EventDetail } from './EventDetail'
import { EventFooter } from './EventFooter'
import { EventHeader } from './EventHeader'
import api from '@/lib/api'

const cleanDescription = text => {
    if (!text) return ''
    // Remove HTML tags and normalize whitespace
    return text
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
}

export async function generateMetadata(props) {
    const params = await props.params
    const event = await api.getEvent(params.id)
    const description = cleanDescription(event.description)
        ?.slice(0, 152)
        .concat('...')

    return {
        title: `keai | ${event.name}`,
        description: description,
        alternates: {
            canonical: `https://keai.cl/evento/${event.id}`,
        },
        openGraph: {
            title: `keai | ${event.name}`,
            description: description,
            url: `https://keai.cl/evento/${event.id}`,
            locale: 'es_CL',
            type: 'website',
            siteName: 'keai',
            images: [
                {
                    url: event.cover,
                    width: 256,
                    height: 144,
                    alt: event.name,
                },
            ],
        },
    }
}

const Event = async props => {
    const params = await props.params
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
