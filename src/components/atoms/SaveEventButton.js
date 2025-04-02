'use client'

import { useUserEvents } from '@/hooks/userEvents'
import { Symbol } from './Symbol'
import { useEffect, useState } from 'react'

export const SaveEventButton = ({ eventId, className = '' }) => {
    const { userEvents, saveEvent } = useUserEvents()
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        if (!userEvents) return
        setIsSaved(userEvents?.map(e => String(e.id)).includes(String(eventId)))
    }, [userEvents])

    return (
        <button
            className={className}
            onClick={() => {
                saveEvent(eventId)
            }}
            type="button">
            {isSaved ? (
                <Symbol className="w-6 h-6" name="heart-solid" />
            ) : (
                <Symbol className="w-6 h-6" name="heart-outline" />
            )}
        </button>
    )
}
