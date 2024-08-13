import { GoogleMaps } from './GoogleMaps'

export const metadata = {
    title: 'KEAI | Mapa',
}

async function getEvents() {
    const res = await fetch('http://localhost:8000/api/events')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Page = async () => {
    // const events = await getEvents()

    return (
        <GoogleMaps
            apiKey={process.env.GOOGLE_CLOUD_API_KEY}
            position={{ lat: -33.4489, lng: -70.6693 }}
        />
    )
}

export default Page
