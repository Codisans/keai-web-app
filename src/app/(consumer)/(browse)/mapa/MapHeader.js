import { CategoryBar } from './CategoryBar'
import { MapFilterForm } from './MapFilterForm'

export const MapHeader = () => {
    return (
        <>
            <header className="fixed z-header inset-0 pointer-events-none">
                <CategoryBar />
                <MapFilterForm />
            </header>
        </>
    )
}
