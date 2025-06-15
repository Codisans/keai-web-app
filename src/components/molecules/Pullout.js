'use client'

import { Symbol } from '@/components/atoms/Symbol'

export const Pullout = ({ isOpen, setIsOpen, children }) => {
    return (
        <div
            className={`fixed inset-0 overflow-hidden z-50 invisible transition-visibility duration-500 ${isOpen ? 'visible' : ''}`}>
            <button
                onClick={() => setIsOpen(false)}
                className={`absolute inset-0 block bg-black/40 transition-opacity duration-500 ease-in-out opacity-0 ${isOpen ? 'opacity-100' : ''}`}>
                <span className="sr-only">Cerrar</span>
            </button>
            <div
                className={`relative h-full w-max min-w-[70vw] max-w-screen sm:min-w-0 sm:w-auto sm:max-w-[24rem] ml-auto bg-white z-1 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : ' translate-x-full'}`}>
                {children}
                <button
                    className="absolute top-grid-gap right-grid-gap text-icon"
                    onClick={() => setIsOpen(false)}>
                    <Symbol className="w-6 h-6" name="cross" />
                </button>
            </div>
        </div>
    )
}
