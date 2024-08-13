'use client'

import { useContext, useState } from 'react'
import SearchInput from '@/components/atoms/SearchInput'
import { FilterForm } from '@/components/organisms/FilterForm'
import { Button } from '@/components/atoms/Button'
import { MapContext } from '../AppContext'

const EventsLayout = ({ children }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(MapContext)

    return (
        <>
            <div className="h-full w-full overflow-y-auto">
                <section className="sticky top-0 w-full p-gutter bg-white z-10">
                    <SearchInput />
                </section>
                <section className="px-gutter h-max pt-4">
                    {filterIsOpen ? <FilterForm /> : children}
                </section>
            </div>
        </>
    )
}

export default EventsLayout
