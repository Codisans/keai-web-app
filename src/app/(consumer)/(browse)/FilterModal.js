'use client'

import { useContext, useEffect } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
// import CloseIcon from '@mui/icons-material/Close'

export const FilterModal = ({ children }) => {
    const { filterIsOpen, setFilterIsOpen } = useContext(ConsumerContext)

    useEffect(() => {
        setFilterIsOpen(false)
        return () => setFilterIsOpen(false)
    }, [])

    return (
        <div
            className={`fixed flex inset-0 h-full overflow-hidden z-filter invisible open:visible transition-visibility duration-500 ${filterIsOpen ? 'open' : ''}`}>
            <button
                onClick={() => setFilterIsOpen(s => !s)}
                className="absolute inset-0 block bg-black/40 transition-opacity duration-500 ease-in-out opacity-0 open:opacity-100">
                <span className="sr-only">Cerrar</span>
            </button>
            <div className="pointer-events-none relative mt-auto max-h-[100%] pt-36 pb-16 w-full z-1 flex">
                <div className="grow bg-white pt-4 rounded-t-ui overflow-hidden w-full pointer-events-auto translate-x-full transition-transform duration-500 ease-in-out open:translate-x-0">
                    {children}
                </div>
            </div>
        </div>
    )
}
