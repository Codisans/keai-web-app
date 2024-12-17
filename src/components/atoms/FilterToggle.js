'use client'
import { Button } from '@/components/atoms/Button'
import { usePathname, useSearchParams } from 'next/navigation'

export const FilterToggle = ({ setIsOpen, isOpen }) => {
    const path = usePathname()
    const searchParams = useSearchParams()

    return (
        <Button
            onClick={() => setIsOpen(s => !s)}
            className="w-min relative border-grey-3 border rounded-ui"
            style="icon"
            disabled={path
                .split('/')
                ?.some(x => ['favoritos', 'perfil', 'cuenta'].includes(x))}
            active={isOpen}>
            <span className="text-indicator absolute top-0 right-0 bg-black text-white rounded-full h-4 w-4 flex items-center justify-center">
                {searchParams.size}
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
