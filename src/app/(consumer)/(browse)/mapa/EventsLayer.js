'use client'

import { useEffect, useState, useContext } from 'react'
import { EventMarker } from './EventMarker'
import { useApi } from '@/hooks/api'
import moment from 'moment'
import { MapContext } from './LeafletMap'

export const EventsLayer = ({ searchParams }) => {
    const { setActiveEvent } = useContext(MapContext)
    const [renderedEvents, setRenderedEvents] = useState([])
    const [targetEvent, setTargetEvent] = useState(null)
    const { events, getEvents, getEvent } = useApi()

    useEffect(() => {
        if (!events) return

        const urlSearchParams = new URLSearchParams()
        Object.keys(searchParams).forEach(key => {
            urlSearchParams.set(key, searchParams[key])
        })

        if (urlSearchParams.size === 0) {
            urlSearchParams.set('min_date', moment().format('YYYY-MM-DD'))
            urlSearchParams.set(
                'max_date',
                moment().add(4, 'days').format('YYYY-MM-DD'),
            )
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

        fetchEvents(urlSearchParams)
    }, [searchParams, events])

    useEffect(() => {
        if (!events) return

        const urlHash = window.location.hash
        if (urlHash == '') return

        const eventId = urlHash.split('#')[1]

        const fetchTargetEvent = async () => {
            try {
                const requestedEvent = await getEvent(eventId)
                setTargetEvent(requestedEvent)
                setActiveEvent(requestedEvent)
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
