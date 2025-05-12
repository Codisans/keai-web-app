'use client'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext({ isClient: false })

export const AppContextProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false)
    const { user, error } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (error?.response?.status === 401) {
            router.push('/entrar')
        }
    }, [user, error])

    useEffect(() => typeof window !== 'undefined' && setIsClient(true), [])

    return (
        <AppContext.Provider value={{ isClient }}>
            {children}
        </AppContext.Provider>
    )
}
