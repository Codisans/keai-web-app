'use client'

import { useSearchParams } from 'next/navigation'
import moment from 'moment'
import { defaultMapDate } from '../FilterForm'

export const DateIndicator = () => {
    const searchParams = useSearchParams()
    const minDate = searchParams.get('min_date') || defaultMapDate()[0]
    const maxDate = searchParams.get('max_date') || defaultMapDate()[1]

    return (
        <div className="absolute bottom-gutter right-gutter z-20 flex gap-x-2 h-10 pointer-events-none bg-white-true rounded px-3 items-center border border-grey gap-1">
            {minDate !== maxDate && (
                <>
                    <DateCard date={minDate} />
                    <span className="w-1.5 h-[2px] block bg-black"></span>
                </>
            )}
            <DateCard date={maxDate} />
        </div>
    )
}

export const DateCard = ({ date, className = '' }) => {
    return (
        <div className={`text-nowrap typo-button text-xs ${className}`}>
            {moment(date).format('ddd')} {moment(date).format('DD')}
        </div>
    )
}
