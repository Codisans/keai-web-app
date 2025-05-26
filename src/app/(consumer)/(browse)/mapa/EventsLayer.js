'use client'

import { useEffect, useState } from "react"
import { EventMarker } from "./EventMarker"
import { useApi } from "@/hooks/api"
import moment from "moment"

export const EventsLayer = ({ searchParams }) => {
    const [events, setEvents] = useState([])
    const { getEvents } = useApi()

    useEffect(() => {
        const params = new URLSearchParams(searchParams)

        if(params.size == 0) {
            params.set("min_date", moment().format("YYYY-MM-DD"))
            params.set("max_date", moment().add(4, "days").format("YYYY-MM-DD"))
        }

        const fetchEvents = async (p) => {
            try {
                const eventsData = await getEvents(p)
                setEvents(eventsData)
            } catch (error) {
                console.error('Error fetching events:', error)
                setEvents([])
            }
        }

        fetchEvents(params)
    }, [searchParams])

    return (
        <>
            {events?.length > 0 && events?.map(event => (
                <EventMarker key={event.id} event={event} />
            ))}
        </>
    )
}