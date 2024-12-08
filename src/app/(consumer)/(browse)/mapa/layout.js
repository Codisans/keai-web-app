import { CategoryBar } from './CategoryBar'
import { MapHeader } from './MapHeader'
import { Map } from './Map'
import { MapFilterModal } from './MapFilterModal'
import { MapFilterForm } from './MapFilterForm'
import { DateIndicator } from './DateIndicator'

const MapLayout = ({ children }) => {
    return (
        <>
            <MapHeader />
            <main className="w-full grow relative flex">
                <CategoryBar />
                <Map>{children}</Map>
                <DateIndicator />
            </main>
            <MapFilterModal>
                <MapFilterForm />
            </MapFilterModal>
        </>
    )
}

export default MapLayout
