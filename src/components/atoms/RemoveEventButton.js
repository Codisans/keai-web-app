'use client'

import { useUserEvents } from '@/hooks/userEvents'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

export const RemoveEventButton = ({ eventId, className = '' }) => {
    const { saveEvent } = useUserEvents()
    const [isLoading, setIsLoading] = useState(false)

    return (
        <button
            className={`p-1 disabled:opacity-50 ${className}`}
            onClick={() => {
                setIsLoading(true)
                saveEvent(eventId)
            }}
            disabled={isLoading}
            type="button">
            <DeleteIcon />
        </button>
    )
}
