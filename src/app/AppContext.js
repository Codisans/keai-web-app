'use client'
// import { useAuth } from '@/hooks/auth'
// import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext({ isClient: false })

export const AppContextProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false)
    // const { user } = useAuth()
    // const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true)
        }
    }, [])

    // useEffect(() => {
    //     console.log(user)
    //     if (user) return

    //     router.push('/entrar')
    // }, [user])

    return (
        <AppContext.Provider value={{ isClient }}>
            {children}
        </AppContext.Provider>
    )
}
