'use client'

import { useEffect, useState } from "react"
import { EventMarker } from "./EventMarker"
import { useApi } from "@/hooks/api"
import { useSearchParams } from "next/navigation"
import moment from "moment"

export const EventMarkersLayer = () => {
    const [events, setEvents] = useState([])
    const searchParams = useSearchParams()
    const { getEvents } = useApi()

    useEffect(() => {
        const params = new URLSearchParams(searchParams)
        console.log(searchParams)

        if(params.size == 0) {
            params.set("min_date", moment().format("YYYY-MM-DD"))
            params.set("max_date", moment().add(7, "days").format("YYYY-MM-DD"))
        }

        console.log(params.toString())
        const fetchEvents = async () => {
            try {
                const eventsData = await getEvents(params)
                setEvents(eventsData)
            } catch (error) {
                console.error('Error fetching events:', error)
                setEvents([])
            }
        }

        fetchEvents()
    }, [searchParams])

    return (
        <>
            {events?.map(event => (
                <EventMarker key={event.id} event={event} />
            ))}
        </>
    )
}