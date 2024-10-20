import { defaultEventsParams } from '@/lib/api'
import React, { createContext, useState, useContext } from 'react'

const MapContext = createContext({
    params: {},
    updateParam: () => {},
    resetParams: () => {},
    clearParams: () => {},
})

export const MapProvider = ({ children }) => {
    const [params, setParams] = useState(defaultEventsParams)

    const clearParams = () => {
        setParams(defaultEventsParams)
    }

    const resetParams = () => {
        setParams(defaultEventsParams)
    }

    const updateParam = (key, value) => {
        setParams(prevParams => ({
            ...prevParams,
            [key]: value,
        }))
    }

    return (
        <MapContext.Provider
            value={{ params, updateParam, clearParams, resetParams }}>
            {children}
        </MapContext.Provider>
    )
}

export function useMapContext() {
    return useContext(MapContext)
}
