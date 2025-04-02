'use client'
// import { useAuth } from '@/hooks/auth'
// import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext({ isClient: false })

export const AppContextProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false)
    // const { user } = useAuth()
    // const router = useRouter()

    useEffect(() => typeof window !== 'undefined' && setIsClient(true), [])

    return (
        <AppContext.Provider value={{ isClient }}>
            {children}
        </AppContext.Provider>
    )
}
