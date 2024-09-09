import { getCategories } from '@/api/getCategories'
import { CategoryNav } from './CategoryNav'

export const Header = async () => {
    const categories = await getCategories()

    return (
        <header className="sticky top-0 inset-x-0 shadow z-header bg-white shrink">
            <CategoryNav categories={categories} />
        </header>
    )
}
