'use client'
import axios from '@/lib/axios'
import { useEffect } from 'react'

export const useEvents = () => {
    const baseUrl = `http://localhost:8000/api/events`
    const url = category ? `${baseUrl}/${category}` : baseUrl

    const events = () => axios.get(url)

    useEffect(() => {
        console.log(events)
    }, [events])

    return {
        events,
    }
}
