import { CategoryBar } from './CategoryBar'
import { MapFilter } from './MapFilter'

export const MapHeader = () => {
    return (
        <>
            <header className="fixed z-header inset-0 pointer-events-none">
                <CategoryBar />
                <MapFilter />
            </header>
        </>
    )
}
