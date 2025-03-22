import { FilterToggle } from '../FilterToggle'
import { CategoryNav } from './CategoryNav'
import api from '@/lib/api'
import { SearchInput } from '../SearchInput'

export const EventsHeader = async () => {
    const categories = await api.getCategories()

    return (
        <div className="sticky top-0 inset-x-0 shadow z-header bg-white shrink">
            <header className="w-full">
                <CategoryNav categories={categories} />
            </header>
            <div className="flex gap-grid px-grid-gap py-grid-gap">
                <SearchInput />
                <FilterToggle />
            </div>
        </div>
    )
}
