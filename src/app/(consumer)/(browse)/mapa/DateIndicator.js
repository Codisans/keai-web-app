'use client'

import { useSearchParams } from 'next/navigation'
import moment from 'moment'
import { defaultMapDate } from '../FilterForm'
import { useConsumerContext } from '../../ConsumerContext'

export const DateIndicator = () => {
    const { openFilter } = useConsumerContext()
    const searchParams = useSearchParams()
    const minDate = searchParams.get('min_date') || defaultMapDate()[0]
    const maxDate = searchParams.get('max_date') || defaultMapDate()[1]

    return (
        <button
            onClick={openFilter}
            type="button"
            className="absolute bottom-gutter right-gutter z-20 flex gap-x-2 h-10 bg-white-true rounded px-3 items-center border border-grey gap-1">
            {minDate !== maxDate && (
                <>
                    <DateCard date={minDate} />
                    <span className="w-1.5 h-[2px] block bg-black"></span>
                </>
            )}
            <DateCard date={maxDate} />
        </button>
    )
}

export const DateCard = ({ date, className = '' }) => {
    return (
        <div className={`text-nowrap typo-button text-xs ${className}`}>
            {moment(date).format('ddd')} {moment(date).format('DD')}
        </div>
    )
}
