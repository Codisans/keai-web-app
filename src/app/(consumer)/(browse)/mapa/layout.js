import { MapHeader } from './MapHeader'
import { Map } from './Map'
import { DateIndicator } from './DateIndicator'

const MapLayout = ({ children }) => {
    return (
        <>
            <MapHeader />
            <main className="w-full grow relative flex">
                <Map>{children}</Map>
                <DateIndicator />
            </main>
        </>
    )
}

export default MapLayout
