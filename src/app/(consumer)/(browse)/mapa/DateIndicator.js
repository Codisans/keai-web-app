'use client'

import { useSearchParams } from 'next/navigation'
import moment from 'moment'

export const DateIndicator = () => {
    const searchParams = useSearchParams()

    const minDate =
        searchParams.get('min_date') || moment().format('YYYY-MM-DD')
    const maxDate =
        searchParams.get('max_date') || moment().format('YYYY-MM-DD')

    return (
        <div className="absolute bottom-gutter right-gutter z-20 flex gap-x-1 pointer-events-none">
            {minDate !== maxDate && <DateCard date={minDate} />}
            <DateCard date={maxDate} />
        </div>
    )
}

export const DateCard = ({ date, className = '' }) => {
    return (
        <div
            className={`flex flex-col items-center uppercase font-bold bg-white border border-grey-3 rounded-ui p-1 leading-none ${className}`}>
            <span className="tracking-widest">{moment(date).format('DD')}</span>
            <span>{moment(date).format('MMM')}</span>
        </div>
    )
}
