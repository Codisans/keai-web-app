'use client'
import { usePathname } from 'next/navigation'
import { createContext, useState, useEffect, useContext } from 'react'

export const ConsumerContext = createContext({
    filterIsOpen: false,
    setFilterIsOpen: () => {},
    menuIsOpen: false,
    setMenuIsOpen: () => {},
    selectedEvent: null,
    setSelectedEvent: () => {},
})

export const ConsumerContextProvider = ({ children }) => {
    const path = usePathname()
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [highlightSearchButton, setHighlightSearchButton] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const openFilter = () => {
        setFilterIsOpen(true)
    }

    const closeFilter = () => {
        setFilterIsOpen(false)
        setHighlightSearchButton(false)
    }

    useEffect(() => {
        setMenuIsOpen(false)
        closeFilter()
    }, [path])

    return (
        <ConsumerContext.Provider
            value={{
                filterIsOpen,
                setFilterIsOpen,
                menuIsOpen,
                setMenuIsOpen,
                selectedEvent,
                setSelectedEvent,
                highlightSearchButton,
                setHighlightSearchButton,
                openFilter,
                closeFilter,
            }}>
            {children}
        </ConsumerContext.Provider>
    )
}

export const useConsumerContext = () => useContext(ConsumerContext)
