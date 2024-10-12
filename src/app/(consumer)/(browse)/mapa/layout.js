'use client'
import { CategoryBar } from './CategoryBar'
import { MapHeader } from './MapHeader'
import LeafletMap from './LeafletMap'

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
