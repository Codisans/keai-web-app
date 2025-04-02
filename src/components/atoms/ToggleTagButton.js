'use client'

import { useUserTags } from '@/hooks/userTags'
import { useEffect, useState } from 'react'

export const ToggleTagButton = ({ tagId, className = '', children }) => {
    const { userTags, saveTag } = useUserTags()
    const [isSelected, setIsSelected] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!userTags) return
        setIsSelected(userTags?.map(t => String(t.id)).includes(String(tagId)))
    }, [userTags])

    return (
        <button
            className={`${className} disabled:opacity-50 ${isSelected ? 'selected' : ''}`}
            onClick={() => {
                setIsLoading(true)
                saveTag(tagId).then(() => setIsLoading(false))
            }}
            disabled={isLoading}
            type="button">
            {children}
        </button>
    )
}
