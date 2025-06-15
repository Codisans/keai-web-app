'use client'

import { useUserEvents } from '@/hooks/userEvents'
import { useState } from 'react'
import { Symbol } from '@/components/atoms/Symbol'

export const RemoveEventButton = ({ eventId, className = '' }) => {
    const { saveEvent } = useUserEvents()
    const [isLoading, setIsLoading] = useState(false)

    return (
        <button
            className={`disabled:opacity-50 ${className}`}
            onClick={() => {
                setIsLoading(true)
                saveEvent(eventId)
            }}
            disabled={isLoading}
            type="button">
            <Symbol className="w-6 h-6" name="trash-icon" />
        </button>
    )
}
