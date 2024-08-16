import { GoogleMaps } from './GoogleMaps'
import { getEvents } from '@/api/getEvents'

export const metadata = {
    title: 'KEAI | Mapa',
}

const Page = async () => {
    const events = await getEvents()

    return (
        <GoogleMaps
            events={events.data}
            apiKey={process.env.GOOGLE_CLOUD_API_KEY}
            position={{ lat: -33.4489, lng: -70.6693 }}
        />
    )
}

export default Page
