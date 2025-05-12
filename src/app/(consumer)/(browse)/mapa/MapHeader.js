import { FilterToggle } from '../FilterToggle'
import { SearchInput } from '../SearchInput'
import { CategoryBar } from '../CategoryBar'
import api from '@/lib/api'

export const MapHeader = async () => {
    const categories = await api.getCategories()
    return (
        <>
            <header className="fixed z-header inset-x-0 top-0 pointer-events-none">
                {categories && <CategoryBar categories={categories} view="map" />}
                <div className="absolute top-[3.7rem] inset-x-grid-gap flex gap-grid">
                    <SearchInput />
                    <FilterToggle />
                </div>
            </header>
        </>
    )
}
