'use client'

import { Loading } from '@/app/Loading'
import { NoResultsText } from '@/components/atoms/NoResultsText'
import { EventCard } from '@/components/molecules/EventCard'
import { useApi } from '@/hooks/api'
import { useEffect, useState } from 'react'
import moment from 'moment'

export const EventResults = ({ searchParams }) => {
    const { getEvents } = useApi()
    const [events, setEvents] = useState([])
    const [results, setResults] = useState([])
    const [sort, setSort] = useState('relevance')

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const eventsData = await getEvents(searchParams)
                setEvents(eventsData)
            } catch (error) {
                console.error('Error fetching events:', error)
                setEvents([])
            }
        }

        fetchEvents()
    }, [searchParams])

    useEffect(() => {
        if (!events) return

        if (sort !== 'relevance') {
            setResults(events)
            return
        }

        const newResults = events.map(event => {
            let newEvent = { ...event }
            const tags = searchParams.get('tags[]')?.split(',') ?? []
            const tagsMatch = event.tags?.filter(t =>
                tags.includes(t.id.toString()),
            )
            newEvent['relevance'] = tagsMatch.length
            return newEvent
        })
        setResults(newResults.sort((a, b) => b.relevance - a.relevance))
    }, [sort, events])

    if (!results) return <Loading />

    if (results?.length === 0) return <NoResultsText />

    return (
        <div className="container">
            <div className="grid grid-cols-2 gap-2 py-2">
                <button
                    className={`col-span-1 button-sm ${
                        sort === 'relevance' ? 'selected' : ''
                    }`}
                    onClick={() => setSort('relevance')}>
                    Relevancia
                </button>
                <button
                    className={`col-span-1 button-sm ${
                        sort === 'upcoming' ? 'selected' : ''
                    }`}
                    onClick={() => setSort('upcoming')}>
                    Próximos
                </button>

                <span className="col-span-2 text-pre bg-black/20 rounded flex justify-center">
                    {results?.length} Resultado
                    {results?.length === 1 ? '' : 's'}
                </span>
            </div>
            <ul className="w-full flex flex-col py-4">
                {results?.map((event, i) => (
                    <li
                        className="w-full border-t border-grey first:border-t-0 py-grid-gap"
                        key={i}>
                        <EventCard type="list" event={event} tags={true} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
