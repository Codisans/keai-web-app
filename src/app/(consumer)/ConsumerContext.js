'use client'
import { usePathname } from 'next/navigation'
import { createContext, useState, useEffect } from 'react'

export const ConsumerContext = createContext({
    filterIsOpen: false,
    setFilterIsOpen: () => {},
    menuIsOpen: false,
    setMenuIsOpen: () => {},
    selectedCategory: null,
    setSelectedCategory: () => {},
    selectedEvent: null,
    setSelectedEvent: () => {},
})

export const ConsumerContextProvider = ({ children }) => {
    const path = usePathname()
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        setMenuIsOpen(false)
        setFilterIsOpen(false)
    }, [path])

    return (
        <ConsumerContext.Provider
            value={{
                filterIsOpen,
                setFilterIsOpen,
                menuIsOpen,
                setMenuIsOpen,
                selectedCategory,
                setSelectedCategory,
                selectedEvent,
                setSelectedEvent,
            }}>
            {children}
        </ConsumerContext.Provider>
    )
}
