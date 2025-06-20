'use client'

import { useUserTags } from '@/hooks/userTags'
import { useEffect, useState } from 'react'

export const ToggleTagButton = ({ tagId, className = '', children }) => {
    const { userTags, saveTag } = useUserTags()
    const [isPending, setIsPending] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        setIsPending(false)
        if (!userTags) return
        const saved = userTags?.map(t => String(t.id)).includes(String(tagId))
        setIsSaved(saved)
    }, [userTags])

    return (
        <button
            className={`${className} disabled:opacity-50 ${isSaved ? 'selected' : ''}`}
            onClick={() => {
                setIsSaved(s => !s)
                setIsPending(true)
                saveTag(tagId)
            }}
            disabled={isPending}
            type="button">
            {children}
        </button>
    )
}
