'use client'
import { Button } from '@/components/atoms/Button'
import SettingsIcon from '@mui/icons-material/Settings'
import { Logo } from '@/components/atoms/Logo'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import MenuIcon from '@mui/icons-material/Menu'

export const ProfileHeader = () => {
    const { menuIsOpen, setMenuIsOpen, setSelectedCategory } =
        useContext(ConsumerContext)

    useEffect(() => {
        setSelectedCategory(null)
    }, [])

    return (
        <header className="sticky top-0 left-0 right-0 shadow z-header bg-white shrink">
            <nav className="w-full p-gg">
                <ul className="w-full grid grid-cols-5 gap-gg">
                    <li className="col-span-3 flex items-center">
                        <Link className="block w-max" href="/eventos">
                            <Logo />
                        </Link>
                    </li>
                    <li className="col-span-1">
                        <Button
                            className="w-full"
                            href="/cuenta"
                            icon={<SettingsIcon />}
                        />
                    </li>
                    <li className="col-span-1">
                        <Button
                            onClick={() => setMenuIsOpen(s => !s)}
                            className="w-full"
                            active={menuIsOpen}
                            icon={<MenuIcon />}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
