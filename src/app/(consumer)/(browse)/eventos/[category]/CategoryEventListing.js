'use client'

import { EventResults } from '../EventResults'
import moment from 'moment'
import { UserTagCarousels } from './UserTagCarousels'

export const CategoryEventListing = ({ params, searchParams }) => {
    
    const urlSearchParams = new URLSearchParams()
    Object.keys(searchParams).forEach(key => {
        urlSearchParams.set(key, searchParams[key])
    })

    urlSearchParams.set('categories[]', params.category)
    
    if (urlSearchParams.get('min_date') == null) {
        urlSearchParams.set('min_date', moment().format('YYYY-MM-DD'))
    }

    if (Object.keys(searchParams)?.length != 0)
        return (
            <div className="w-full py-8 flex flex-col gap-y-gutter">
                <EventResults searchParams={urlSearchParams} />
            </div>
        )

    return (
        <>
            <div className="w-full py-8 flex flex-col gap-y-6">
                <UserTagCarousels category={params.category} />
            </div>
        </>
    )
}