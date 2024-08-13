import { createContext, useState } from 'react'

export const MapContext = createContext({
    filterIsOpen: false,
    setFilterIsOpen: () => {},
})

export const AppContext = ({ children }) => {
    const [filterIsOpen, setFilterIsOpen] = useState(false)

    return (
        <MapContext.Provider
            value={{
                filterIsOpen,
                setFilterIsOpen,
            }}>
            {children}
        </MapContext.Provider>
    )
}
