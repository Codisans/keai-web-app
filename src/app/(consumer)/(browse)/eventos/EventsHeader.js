import { CategoryNav } from './CategoryNav'
import { ListFilter } from './ListFilter'
import api from '@/lib/api'

export const EventsHeader = async () => {
    const categories = await api.getCategories()

    return (
        <div className="sticky top-0 inset-x-0 shadow z-header bg-white shrink">
            <header className="w-full">
                <CategoryNav categories={categories} />
            </header>
            <ListFilter />
        </div>
    )
}
