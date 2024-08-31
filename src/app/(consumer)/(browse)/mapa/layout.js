import { GoogleMaps } from './GoogleMaps'

const MapLayout = ({ children }) => {
    return (
        <>
            <div className="w-full h-auto">
                <GoogleMaps
                    // events={events.data}
                    apiKey={process.env.GOOGLE_CLOUD_API_KEY}
                    position={{ lat: -33.4489, lng: -70.6693 }}>
                    {children}
                </GoogleMaps>
            </div>
        </>
    )
}

export default MapLayout
