'use client'
import { usePathname } from 'next/navigation'
import { createContext, useState, useEffect, useContext } from 'react'

export const ConsumerContext = createContext({
    categories: [],
    tags: [],
    filterIsOpen: false,
    setFilterIsOpen: () => {},
    menuIsOpen: false,
    setMenuIsOpen: () => {},
    selectedCategory: null,
    setSelectedCategory: () => {},
    selectedEvent: null,
    setSelectedEvent: () => {},
})

export const ConsumerContextProvider = ({ children, categories, tags }) => {
    const path = usePathname()
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [highlightSearchButton, setHighlightSearchButton] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)

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
        setSelectedCategory(
            path.includes('/mapa/') || path.includes('/eventos/')
                ? path.split('/').pop()
                : null,
        )
    }, [path])

    return (
        <ConsumerContext.Provider
            value={{
                categories,
                tags,
                filterIsOpen,
                setFilterIsOpen,
                menuIsOpen,
                setMenuIsOpen,
                selectedCategory,
                setSelectedCategory,
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
