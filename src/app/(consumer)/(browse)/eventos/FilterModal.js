'use client'

import { useContext, useEffect } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'

export const FilterModal = ({ children }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)

    useEffect(() => {
        setFilterIsOpen(false)
        return () => setFilterIsOpen(false)
    }, [])

    return (
        <div
            className={`fixed top-0 pt-40 pb-16 flex bg-white left-0 w-full h-full overflow-hidden z-filter invisible open:visible ${filterIsOpen ? 'open' : ''}`}>
            {children}
        </div>
    )
}
