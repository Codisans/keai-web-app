import { getCategories } from '@/api/getCategories'
import { CategoryNav } from './CategoryNav'
import { FilterToggle } from '@/components/atoms/FilterToggle'

export const Header = async () => {
    const categories = await getCategories()

    return (
        <div className="sticky top-0 inset-x-0 shadow z-header bg-white shrink">
            <header className="w-full">
                <CategoryNav categories={categories} />
            </header>
            <section className="w-full">
                <div className="flex pt-4 pb-2 gap-x-gutter px-gutter">
                    <input
                        className="px-3 h-10 align-middle rounded-button border-grey-3 grow"
                        placeholder="Keai?"
                        type="text"
                    />
                    <div className="w-min">
                        <FilterToggle />
                    </div>
                </div>
            </section>
        </div>
    )
}
