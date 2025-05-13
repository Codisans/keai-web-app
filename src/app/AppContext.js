'use client'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext({ isClient: false })

export const AppContextProvider = ({ children }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => typeof window !== 'undefined' && setIsClient(true), [])

    return (
        <AppContext.Provider value={{ isClient }}>
            {children}
        </AppContext.Provider>
    )
}
