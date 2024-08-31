'use client'
import { usePathname } from 'next/navigation'
import { createContext, useState, useEffect } from 'react'

export const ManagerContext = createContext({})

export const ManagerContextProvider = ({ children }) => {
    return (
        <ManagerContext.Provider value={{}}>{children}</ManagerContext.Provider>
    )
}
