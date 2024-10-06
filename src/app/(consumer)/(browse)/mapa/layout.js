import { CategoryBar } from './CategoryBar'
import { LeafletMap } from './LeafletMap'
import { MapHeader } from './MapHeader'

const MapLayout = ({ children }) => {
    return (
        <>
            <MapHeader />
            <main className="w-full grow relative flex">
                <CategoryBar />
                <LeafletMap>{children}</LeafletMap>
            </main>
        </>
    )
}

export default MapLayout
