import { FilterToggle } from '../FilterToggle'
import api from '@/lib/api'
import { SearchInput } from '../SearchInput'
import { CategoryBar } from '../CategoryBar'
// import { CategoryNav } from './CategoryNav'

export const EventsHeader = async () => {
    const categories = await api.getCategories()

    return (
        <div className="sticky top-0 inset-x-0 shadow z-header bg-white shrink">
            <header className="w-full">
                {/* <CategoryNav categories={categories} /> */}
                <CategoryBar categories={categories} view="listing" />
            </header>
            <div className="flex gap-grid px-grid-gap pb-grid-gap">
                <SearchInput />
                <FilterToggle />
            </div>
        </div>
    )
}
