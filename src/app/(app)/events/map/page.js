import GoogleMaps from '@/components/GoogleMaps'

export const metadata = {
    title: 'Events Map',
}

async function getEvents() {
    const res = await fetch('http://localhost:8000/api/events')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Map = async () => {
    const events = await getEvents()

    return (
        <>
            <div className="h-full w-full bg-gray-100">
                <GoogleMaps />
            </div>
        </>
    )
}

export default Map
