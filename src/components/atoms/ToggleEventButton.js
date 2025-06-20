'use client'

import { useUserEvents } from '@/hooks/userEvents'
import { useEffect, useState } from 'react'

export const ToggleEventButton = ({ eventId, className = '', children }) => {
    const { userEvents, saveEvent } = useUserEvents()
    const [isPending, setIsPending] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        setIsPending(false)
        if (!userEvents) return
        const saved = userEvents
            ?.map(e => String(e.id))
            .includes(String(eventId))
        setIsSaved(saved)
    }, [userEvents])

    return (
        <button
            className={`${className} ${isSaved ? 'selected' : ''} disabled:opacity-50`}
            onClick={() => {
                setIsSaved(s => !s)
                setIsPending(true)
                saveEvent(eventId)
            }}
            disabled={isPending}
            type="button">
            {children}
        </button>
    )
}
