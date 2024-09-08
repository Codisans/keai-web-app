'use client'

import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export const CategoryLink = ({
    className = '',
    category,
    children,
    ...props
}) => {
    const { setSelectedCategory, selectedCategory } =
        useContext(ConsumerContext)
    const router = useRouter()

    return (
        <button
            {...props}
            className={`${className} ${selectedCategory == category.id ? 'active' : ''}`}
            onClick={() => {
                setSelectedCategory(category?.id || null)
                router.push(`/eventos/${category.id}`)
            }}>
            {children}
        </button>
    )
}
