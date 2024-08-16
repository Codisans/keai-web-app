'use client'
import CloseIcon from '@mui/icons-material/Close'

export const Pullout = ({ isOpen, setIsOpen, children }) => {
    return (
        <div
            className={`fixed inset-0 overflow-hidden z-main-menu invisible open:visible transition-visibility duration-500 ${isOpen ? 'open' : ''}`}>
            <button
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 block bg-black/40 transition-opacity duration-500 ease-in-out opacity-0 open:opacity-100">
                <span className="sr-only">Cerrar</span>
            </button>
            <div className="relative h-full w-max min-w-[70vw] max-w-screen sm:min-w-0 sm:w-auto sm:max-w-[24rem] mr-auto bg-white z-1 -translate-x-full transition-transform duration-500 ease-in-out open:translate-x-0">
                {children}
                <button
                    className="absolute top-gutter right-gutter text-icon"
                    onClick={() => setIsOpen(false)}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    )
}
