'use client'

import { UiContext } from '@/app/AppContext'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export const CategoryLink = ({ category, children, ...props }) => {
    const { setSelectedCategory } = useContext(UiContext)
    const router = useRouter()

    return (
        <button
            {...props}
            onClick={() => {
                setSelectedCategory(category?.id || null)
                router.push(`/eventos/${category.id}`)
            }}>
            {children}
        </button>
    )
}
