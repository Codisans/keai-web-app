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
            className={`fixed top-32 border border-grey-3 bottom-16 inset-x-gg rounded-ui bg-white overflow-hidden z-filter invisible open:visible ${filterIsOpen ? 'open' : ''}`}>
            {children}
        </div>
    )
}
