'use client'
import { useContext } from 'react'
import { Button } from '@/components/atoms/Button'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { usePathname } from 'next/navigation'

export const FilterToggle = () => {
    const { setFilterIsOpen, filterIsOpen } = useContext(ConsumerContext)
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
            <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z" />
            </svg>
        </Button>
    )
}
