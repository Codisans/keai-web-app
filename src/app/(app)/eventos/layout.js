'use client'

import { useContext, useEffect } from 'react'
import SearchInput from '@/components/atoms/SearchInput'
import { FilterForm } from '@/components/organisms/FilterForm'
import { UiContext } from '../../AppContext'
import { TagSearch } from '@/components/molecules/TagSearch'

const EventsLayout = ({ children }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(UiContext)

    useEffect(() => {
        setFilterIsOpen(false)
        return () => setFilterIsOpen(false)
    }, [])

    return (
        <>
            <div className="h-full w-full overflow-y-auto">
                {/* <section className="w-full p-gutter bg-white z-10">
                    <TagSearch />
                </section> */}

                {filterIsOpen ? (
                    <section className="p-gutter">
                        <FilterForm />
                    </section>
                ) : (
                    children
                )}
            </div>
        </>
    )
}

export default EventsLayout
