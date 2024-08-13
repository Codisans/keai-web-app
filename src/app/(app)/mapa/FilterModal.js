'use client'

import { useContext } from 'react'
import { MapContext } from '../AppContext'
import CloseIcon from '@mui/icons-material/Close'
import { FilterForm } from '@/components/organisms/FilterForm'

export const FilterModal = () => {
    const { filterIsOpen, setFilterIsOpen } = useContext(MapContext)

    return (
        filterIsOpen && (
            <div className="absolute bottom-0 inset-x-0 bg-white max-h-main">
                <button
                    className="absolute top-gutter right-gutter"
                    onClick={() => setFilterIsOpen(s => !s)}>
                    <CloseIcon />
                </button>
                <div className="overflow-y w-full p-gutter h-full">
                    <FilterForm />
                </div>
            </div>
        )
    )
}
