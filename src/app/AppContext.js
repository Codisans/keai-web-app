'use client'
import { createContext, useState } from 'react'

export const UiContext = createContext({
    filterIsOpen: false,
    setFilterIsOpen: () => {},
    menuIsOpen: false,
    setMenuIsOpen: () => {},
    selectedEvent: null,
    setSelectedEvent: () => {},
})

export const AppContext = ({ children }) => {
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

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
