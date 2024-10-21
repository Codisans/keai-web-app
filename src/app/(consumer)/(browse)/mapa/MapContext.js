import { defaultEventsParams } from '@/lib/api'
import React, { createContext, useState, useContext } from 'react'

const MapContext = createContext({
    params: {},
    updateParams: () => {},
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

    const updateParams = params => {
        setParams(prevParams => ({
            ...prevParams,
            ...params,
        }))
    }

    return (
        <MapContext.Provider
            value={{
                params,
                updateParams,
                clearParams,
                resetParams,
            }}>
            {children}
        </MapContext.Provider>
    )
}

export function useMapContext() {
    return useContext(MapContext)
}
