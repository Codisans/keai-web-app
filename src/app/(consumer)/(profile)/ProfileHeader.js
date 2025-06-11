'use client'
import SettingsIcon from '@mui/icons-material/Settings'
import { Logo } from '@/components/atoms/Logo'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { NavLink } from '@/components/atoms/NavLink'

export const ProfileHeader = () => {
    const { menuIsOpen, setMenuIsOpen, setSelectedCategory } =
        useContext(ConsumerContext)

    useEffect(() => {
        setSelectedCategory(null)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 border-b border-grey z-header bg-white shrink">
            <nav className="w-full p-2">
                <ul className="w-full flex justify-end gap-x-2 items-center">
                    <li className="mr-auto block px-2">
                        <Link className="block w-max" href="/eventos">
                            <Logo />
                        </Link>
                    </li>
                    <li>
                        <NavLink
                            pathname="/cuenta"
                            className="button-icon w-20">
                            <SettingsIcon />
                        </NavLink>
                    </li>
                    <li>
                        <button
                            onClick={() => setMenuIsOpen(s => !s)}
                            className={`w-20 button-icon ${menuIsOpen ? 'active' : ''}`}
                            type="button">
                            <span
                                className={`burger ${menuIsOpen ? 'open' : ''}`}></span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
