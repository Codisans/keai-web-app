'use client'

import { useRouter } from 'next/navigation'

export const BackButton = ({ children, ...props }) => {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} type="button" {...props}>
            {children}
        </button>
    )
}
