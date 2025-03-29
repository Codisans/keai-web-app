'use client'

import { useUser } from '@/hooks/user'
import { Symbol } from './Symbol'
import { useEffect } from 'react'

export const SaveEventButton = ({ eventId, className = '' }) => {
    const { details, saveEvent } = useUser()

    useEffect(() => {
        console.log(details)
    }, [details])

    return (
        <button
            className={className}
            onClick={() => {
                saveEvent(eventId)
            }}
            type="button">
            {details?.saved_events?.includes(eventId) ? (
                <Symbol className="w-6 h-6" name="heart-solid" />
            ) : (
                <Symbol className="w-6 h-6" name="heart-outline" />
            )}
        </button>
    )
}
