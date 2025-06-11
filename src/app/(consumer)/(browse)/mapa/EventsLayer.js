'use client'

import { useEffect, useState } from 'react'
import { EventMarker } from './EventMarker'
import { useApi } from '@/hooks/api'
import moment from 'moment'

export const EventsLayer = ({ searchParams }) => {
    const [renderedEvents, setRenderedEvents] = useState([])
    const [targetEvent, setTargetEvent] = useState(null)
    const { events, getEvents, getEvent } = useApi()

    useEffect(() => {
        const params = new URLSearchParams(searchParams)

        if (params.size == 0) {
            params.set('min_date', moment().format('YYYY-MM-DD'))
            params.set('max_date', moment().add(4, 'days').format('YYYY-MM-DD'))
        }

        const fetchEvents = async p => {
            try {
                const eventsData = await getEvents(p)
                setRenderedEvents(eventsData)
            } catch (error) {
                console.error('Error fetching events:', error)
                setRenderedEvents([])
            }
        }

        fetchEvents(params)
    }, [searchParams])

    useEffect(() => {
        if (!events) return

        const id = window.location.href.split('#')[1]
        if (!id) return

        const fetchTargetEvent = async () => {
            try {
                const requestedEvent = await getEvent(id)
                setTargetEvent(requestedEvent)
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        }

        fetchTargetEvent()
    }, [events])

    return (
        <>
            {targetEvent && (
                <EventMarker event={targetEvent} targetEvent={true} />
            )}
            {renderedEvents?.length > 0 &&
                renderedEvents?.map(event => (
                    <EventMarker key={event.id} event={event} />
                ))}
        </>
    )
}
