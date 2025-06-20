'use client'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext({ isClient: false })

export const AppContextProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [filterOpen, setFilterOpen] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => typeof window !== 'undefined' && setIsClient(true), [])

    return (
        <AppContext.Provider
            value={{
                isClient,
                menuOpen,
                setMenuOpen,
                filterOpen,
                setFilterOpen,
            }}>
            {children}
        </AppContext.Provider>
    )
}
