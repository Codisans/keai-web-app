'use client'

import { useUserEvents } from '@/hooks/userEvents'
import { useEffect, useState } from 'react'

export const ToggleEventButton = ({ eventId, className = '', children }) => {
    const { userEvents, saveEvent } = useUserEvents()
    const [isSaved, setIsSaved] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!userEvents) return
        setIsSaved(userEvents?.map(e => String(e.id)).includes(String(eventId)))
    }, [userEvents])

    return (
        <button
            className={`${className} ${isSaved ? 'selected' : ''} disabled:opacity-50`}
            onClick={() => {
                setIsLoading(true)
                saveEvent(eventId).then(() => setIsLoading(false))
            }}
            disabled={isLoading}
            type="button">
            {children}
        </button>
    )
}
