'use client'

import { Loading } from '@/app/Loading'
import { NoResultsText } from '@/components/atoms/NoResultsText'
import { EventCard } from '@/components/molecules/EventCard'
import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'

export const EventResults = ({ searchParams }) => {
    const { getEvents } = useApi()
    const [results, setResults] = useState([])

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await getEvents({ searchParams })
                setResults(eventsData)
            } catch (error) {
                console.error('Error fetching events:', error)
                setResults([])
            }
        }

        fetchEvents()
    }, [searchParams])

    if (!results) return <Loading />

    if (results?.length === 0) return <NoResultsText />

    return (
        <div className="container">
            <div className="px-1 py-0.5 bg-black/20 rounded flex justify-center">
                <span className="tex-pre">
                    {results?.length} Resultado{results?.length === 1 ? '' : 's'}
                </span>
            </div>
            <ul className="w-full flex flex-col pt-4">
                {results?.map((event, i) => (
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
