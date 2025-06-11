import { FilterToggle } from '../FilterToggle'
import { SearchInput } from '../SearchInput'
import { CategoryBar } from '../CategoryBar'

export const EventsHeader = () => {
    return (
        <header className="sticky top-0 inset-x-0 border-b border-grey z-header bg-white shrink listing">
            <CategoryBar view="listing" />
            <div className="flex gap-2 px-2 pb-2">
                <SearchInput />
                <FilterToggle />
            </div>
        </header>
    )
}
