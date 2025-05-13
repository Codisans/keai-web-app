import { MapHeader } from './MapHeader'
import { Map } from './Map'
import { DateIndicator } from './DateIndicator'
import { FilterForm } from '../FilterForm'

const MapLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col grow">
            <MapHeader />
            <FilterForm isMap={true} className="open:block max-[496px]:left-2 min-[496px]:w-full right-2 hidden fixed z-header top-[6.8rem] border border-grey bottom-[4.1rem] rounded overflow-hidden select-none" />

            <main className="w-full h-full grow relative flex">
                <Map>{children}</Map>
                <DateIndicator />
            </main>
        </div>
    )
}

export default MapLayout
