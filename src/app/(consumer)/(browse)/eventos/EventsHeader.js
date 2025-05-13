import { FilterToggle } from '../FilterToggle'
import api from '@/lib/api'
import { SearchInput } from '../SearchInput'
import { CategoryBar } from '../CategoryBar'

export const EventsHeader = async () => {
    const categories = await api.getCategories()

    return (
        <header className="sticky top-0 inset-x-0 shadow z-header bg-white shrink listing">
            <CategoryBar categories={categories} view="listing" />
            <div className="flex gap-2 px-2 pb-2">
                <SearchInput />
                <FilterToggle />
            </div>
        </header>
    )
}
