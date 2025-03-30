'use client'

import { useUser } from '@/hooks/user'
import { Symbol } from './Symbol'
import { useEffect, useState } from 'react'

export const SaveEventButton = ({ eventId, className = '' }) => {
    const { details, saveEvent } = useUser()
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        if (!details) return
        setIsSaved(
            details?.favorite_events
                ?.map(e => String(e.id))
                .includes(String(eventId)),
        )
    }, [details])

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
