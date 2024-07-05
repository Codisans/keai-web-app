import Map from '@/components/Map'

function GoogleMaps() {
    return (
        <Map
            apiKey={process.env.GOOGLE_CLOUD_API_KEY}
            position={{ lat: -33.4489, lng: -70.6693 }}
        />
    )
}

export default GoogleMaps
