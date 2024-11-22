import { FilterToggle } from '@/components/atoms/FilterToggle'

export const SearchBar = () => {
    return (
        <section className="w-full border-b border-grey-3">
            <div className="flex gap-x-1 p-gg pb-1">
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
    )
}

export const SearchInput = () => {
    return (
        <div>
            <input
                className="px-3 h-10 align-middle rounded-button border-grey-3 grow"
                placeholder="Keai?"
                type="text"
            />
        </div>
    )
}
