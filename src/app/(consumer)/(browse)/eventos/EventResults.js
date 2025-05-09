// 'use client'

import { NoResultsText } from '@/components/atoms/NoResultsText'
import { EventCard } from '@/components/molecules/EventCard'
// import { useApi } from '@/hooks/api'
// import { useSearchParams, useParams } from 'next/navigation'
// import { useEffect, useState } from 'react'

export const EventResults = ({ events }) => {
    // const { events } = useApi()
    // const searchParams = useSearchParams()
    // const params = useParams()
    // const [results, setResults] = useState([])

    // useEffect(() => {
    //     if (!events) return
    //     console.log(events[0])

    //     setResults(
    //         events.filter(event => {
    //             // event.category === params.category &&
    //             // moment(event.date).isAfter(moment(searchParams.get('min_date')))
    //             return event.categories.map(c => c.id).includes(params.category)
    //         }),
    //     )
    // }, [searchParams, params])

    // if (results?.length === 0) return <NoResultsText />

    if (events?.length === 0) return <NoResultsText />

    return (
        <div className="container">
            <div className="px-1 py-0.5 bg-black/20 rounded flex justify-center">
                <span className="tex-pre">
                    {events.length} Resultado{events.length === 1 ? '' : 's'}
                </span>
            </div>
            <ul className="w-full flex flex-col pt-4">
                {events?.map((event, i) => (
                    <li
                        className="w-full border-t border-grey first:border-t-0 py-grid-gap"
                        key={i}>
                        <EventCard type="list" event={event} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
