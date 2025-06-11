'use client'
import { useSearchParams } from 'next/navigation'
import { useConsumerContext } from '@/app/(consumer)/ConsumerContext'

export const FilterToggle = () => {
    const searchParams = useSearchParams()
    const { filterIsOpen, openFilter, closeFilter } = useConsumerContext()

    const getIndicatorCount = searchParams => {
        const dateFilter =
            searchParams.get('min_date') && searchParams.get('max_date') ? 1 : 0
        const priceFilter =
            searchParams.get('min_price') || searchParams.get('max_price')
                ? 1
                : 0
        const tagFilter =
            Number(searchParams.getAll('tags[]')?.length) > 0 ? 1 : 0
        return dateFilter + priceFilter + tagFilter
    }

    const indicatorCount = getIndicatorCount(searchParams)

    return (
        <button
            onClick={() => (filterIsOpen ? closeFilter() : openFilter())}
            type="button"
            className={`button-icon relative pointer-events-auto ${filterIsOpen ? 'current' : ''}`}>
            {indicatorCount > 0 && (
                <span className="text-small absolute top-0 right-0 bg-black font-bold rounded-full h-4 w-4 flex items-center justify-center text-white">
                    {indicatorCount}
                </span>
            )}
            <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
            </svg>
        </button>
    )
}
