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
        <header className="fixed top-0 left-0 right-0 shadow z-40 bg-white shrink">
            <nav className="w-full p-grid-gap">
                <ul className="w-full grid grid-cols-5 gap-grid">
                    <li className="col-span-3 flex items-center">
                        <Link className="block w-max" href="/eventos">
                            <Logo />
                        </Link>
                    </li>
                    <li className="col-span-1">
                        <NavLink
                            pathname="/cuenta"
                            className="button-icon w-full">
                            <SettingsIcon />
                        </NavLink>
                    </li>
                    <li className="col-span-1">
                        <button
                            onClick={() => setMenuIsOpen(s => !s)}
                            className={`w-full button-icon ${menuIsOpen ? 'active' : ''}`}
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
