'use client'
import { usePathname } from 'next/navigation'
import { createContext, useState, useEffect } from 'react'

export const UiContext = createContext({
    filterIsOpen: false,
    setFilterIsOpen: () => {},
    menuIsOpen: false,
    setMenuIsOpen: () => {},
    selectedEvent: null,
    setSelectedEvent: () => {},
})

export const AppContext = ({ children }) => {
    const path = usePathname()
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    useEffect(() => {
        setMenuIsOpen(false)
        setFilterIsOpen(false)
    }, [path])

    return (
        <UiContext.Provider
            value={{
                filterIsOpen,
                setFilterIsOpen,
                menuIsOpen,
                setMenuIsOpen,
                selectedEvent,
                setSelectedEvent,
            }}>
            {children}
        </UiContext.Provider>
    )
}
