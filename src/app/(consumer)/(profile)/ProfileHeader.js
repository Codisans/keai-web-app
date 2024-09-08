'use client'
import { Button } from '@/components/atoms/Button'
import SettingsIcon from '@mui/icons-material/Settings'
import { LogoutButton } from '@/components/atoms/LogoutButton'
import { Logo } from '@/components/atoms/Logo'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'

export const ProfileHeader = () => {
    const { setSelectedCategory } = useContext(ConsumerContext)

    useEffect(() => {
        setSelectedCategory(null)
    }, [])

    return (
        <header className="sticky top-0 inset-0 shadow z-header bg-white shrink">
            <nav className="w-full p-gutter">
                <ul className="w-full grid grid-cols-5 gap-gutter">
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
                        <LogoutButton className="w-full" />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
