'use client'

import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import CloseIcon from '@mui/icons-material/Close'
import { FilterForm } from '@/components/organisms/FilterForm'

export const FilterModal = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)

    return (
        filterIsOpen && (
            <div className="relative">
                <button
                    className="absolute top-gg right-gg"
                    onClick={() => setFilterIsOpen(s => !s)}>
                    <CloseIcon />
                </button>
                <div className="overflow-y w-full p-gg h-full">
                    <FilterForm />
                </div>
            </div>
        )
    )
}
