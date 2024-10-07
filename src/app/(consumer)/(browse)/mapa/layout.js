'use client'
import { CategoryBar } from './CategoryBar'
import { MapHeader } from './MapHeader'
import { Map } from './Map'

const MapLayout = ({ children }) => {
    return (
        <>
            <MapHeader />
            <main className="w-full grow relative flex">
                <CategoryBar />
                <Map>{children}</Map>
            </main>
        </>
    )
}

export default MapLayout
