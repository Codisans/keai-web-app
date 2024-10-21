'use client'

import { useContext, useEffect } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'

export const MapFilterModal = ({ children }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)

    useEffect(() => {
        setFilterIsOpen(false)
        return () => setFilterIsOpen(false)
    }, [])

    return (
        <div
            className={`fixed top-28 border border-grey-3 h-[calc(100svh-10.42rem)] right-2 w-[calc(100%-1rem)] max-w-xl rounded-ui overflow-hidden z-filter invisible open:visible ${filterIsOpen ? 'open' : ''}`}>
            {children}
        </div>
    )
}
