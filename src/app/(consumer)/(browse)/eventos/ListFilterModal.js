'use client'

import { useContext, useEffect } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'

export const ListFilterModal = ({ children }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)

    useEffect(() => {
        setFilterIsOpen(false)
        return () => {
            setFilterIsOpen(false)
            document.documentElement.classList.remove('filter-open')
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('filter-open', filterIsOpen)
    }, [filterIsOpen])

    return (
        <div
            className={`fixed top-0 pt-32 pb-12 bg-white left-0 w-full h-full overflow-hidden z-filter hidden open:block ${filterIsOpen ? 'open' : ''}`}>
            {children}
        </div>
    )
}
