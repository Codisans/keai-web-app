import { getCategories } from '@/api/getCategories'
import { CategoryNav } from './CategoryNav'
import { SearchBar } from '../SearchBar'

export const EventsHeader = async () => {
    const categories = await getCategories()

    return (
        <div className="sticky top-0 inset-x-0 shadow z-header bg-white shrink">
            <header className="w-full">
                <CategoryNav categories={categories} />
            </header>
            <SearchBar />
        </div>
    )
}
