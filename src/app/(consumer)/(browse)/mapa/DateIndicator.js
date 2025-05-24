'use client'

import { useSearchParams } from 'next/navigation'
import moment from 'moment'

export const DateIndicator = () => {
    const searchParams = useSearchParams()
    const today = moment().format('YYYY-MM-DD')
    const minDate = searchParams.get('min_date') || today
    const maxDate = searchParams.get('max_date') || today

    return (
        <div className="absolute bottom-gutter right-gutter z-20 flex gap-x-1 pointer-events-none bg-white-true rounded p-1 items-center border border-grey gap-1">
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
        <div
            className={`flex flex-col gap-y-1 items-center typo-date text-sm px-1 ${className}`}>
            <span>{moment(date).format('DD')}</span>
            <span>{moment(date).format('MMM')}</span>
        </div>
    )
}
