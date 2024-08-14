import { getCategories } from '@/api/getCategories'
import { CategoryCarousel } from './CategoryCarousel'

export const CategoryBar = async () => {
    const categories = await getCategories()

    return (
        <header className="sticky top-0 inset-x-0 py-gutter z-nav bg-white shadow">
            <nav>
                <CategoryCarousel categories={categories} />
            </nav>
        </header>
    )
}
