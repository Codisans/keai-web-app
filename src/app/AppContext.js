'use client'
import { createContext, useState } from 'react'

export const UiContext = createContext({
    filterIsOpen: false,
    setFilterIsOpen: () => {},
    menuIsOpen: false,
    setMenuIsOpen: () => {},
})

export const AppContext = ({ children }) => {
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <UiContext.Provider
            value={{
                filterIsOpen,
                setFilterIsOpen,
                menuIsOpen,
                setMenuIsOpen,
            }}>
            {children}
        </UiContext.Provider>
    )
}
