import { FilterToggle } from '@/components/atoms/FilterToggle'

export const SearchBar = () => {
    return (
        <section className="w-full">
            <div className="flex py-3 gap-x-1.5 px-gutter">
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
