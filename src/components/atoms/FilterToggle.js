'use client'
import { useContext } from 'react'
import { Button } from '@/components/atoms/Button'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { usePathname } from 'next/navigation'
import FilterAltIcon from '@mui/icons-material/FilterAlt'

export const FilterToggle = () => {
    const { setFilterIsOpen, filterIsOpen, menuIsOpen, setMenuIsOpen } =
        useContext(ConsumerContext)
    const path = usePathname()

    return (
        <Button
            onClick={() => setFilterIsOpen(s => !s)}
            className="w-full relative"
            style="icon"
            disabled={path
                .split('/')
                ?.some(x => ['favoritos', 'perfil', 'cuenta'].includes(x))}
            active={filterIsOpen}>
            <span className="text-indicator absolute -top-2 -right-2 bg-black text-white rounded-full h-5 w-5 flex items-center justify-center">
                5
            </span>
            <FilterAltIcon />
        </Button>
    )
}
