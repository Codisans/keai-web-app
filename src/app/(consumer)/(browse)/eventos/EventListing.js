'use client'

import { useApi } from '@/hooks/api'
import { EventResults } from './EventResults'
import moment from 'moment'
import { ReccomendedEvents } from './ReccomendedEvents'
import { UpcomingEvents } from './UpcomingEvents'
import { CategoryEvents } from './CategoryEvents'

export const EventListing = ({ searchParams }) => {
    const { categories } = useApi()

    const urlSearchParams = new URLSearchParams()
    Object.keys(searchParams).forEach(key => {
        urlSearchParams.set(key, searchParams[key])
    })

    if (urlSearchParams.get('min_date') == null) {
        urlSearchParams.set('min_date', moment().format('YYYY-MM-DD'))
    }

    if (Object.keys(searchParams)?.length != 0)
        return <EventResults searchParams={urlSearchParams} />

    return (
        <div className="w-full py-8 flex flex-col gap-y-6">
            <ReccomendedEvents />
            <UpcomingEvents />

            {categories?.map((category, i) => (
                <CategoryEvents key={i} category={category} />
            ))}
        </div>
    )
}
