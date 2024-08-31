'use client'

import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export const CategoryLink = ({ category, children, ...props }) => {
    const { setSelectedCategory } = useContext(ConsumerContext)
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
