import { FilterToggle } from '../FilterToggle'
import { SearchInput } from '../SearchInput'
import { CategoryBar } from '../CategoryBar'
import api from '@/lib/api'

export const MapHeader = async () => {
    const categories = await api.getCategories()
    return (
        <header className="fixed z-header inset-x-0 top-0 pointer-events-none map">
            {categories && <CategoryBar categories={categories} view="map" />}
            <div className="px-2 flex gap-2 pb-2">
                <SearchInput />
                <FilterToggle />
            </div>
        </header>
    )
}