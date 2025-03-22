import { MapHeader } from './MapHeader'
import { Map } from './Map'
import { DateIndicator } from './DateIndicator'
import { FilterForm } from '../FilterForm'

const MapLayout = ({ children }) => {
    return (
        <>
            <MapHeader />
            <FilterForm className="open:block hidden fixed z-header top-[6.8rem] border border-grey bottom-[4.6rem] rounded overflow-hidden inset-x-grid-gap select-none" />
            <main className="w-full grow relative flex">
                <Map>{children}</Map>
                <DateIndicator />
            </main>
        </>
    )
}

export default MapLayout
