'use client'
import { useContext, useEffect } from 'react'
import { FilterForm } from '@/components/organisms/FilterForm'

export const ListingFilter = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(UiContext)

    useEffect(() => {
        setFilterIsOpen(false)
        return () => setFilterIsOpen(false)
    }, [])

    return (
        filterIsOpen && (
            <section className="p-gutter">
                <FilterForm />
            </section>
        )
    )
}
