'use client'
import NavLink from '@/components/NavLink'
import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect } from 'react'

const Navigation = () => {
    const path = usePathname()
    const hash = useParams().hash

    useEffect(() => {
        console.log(path, hash)
    }, [])

    return (
        <nav className="h-nav flex-none z-50 bg-white relative flex items-center">
            <ul className=" flex w-full items-center gap-6 px-6">
                <li
                    className={`grow active:hidden ${path.concat('') == '/browse' ? 'active' : ''}`}>
                    <NavLink
                        className="py-1.5 w-full items-center justify-center bg-black text-white flex rounded active:hidden"
                        href="/browse">
                        List
                    </NavLink>
                </li>
                <li
                    className={`grow active:hidden ${path.concat('') == '/map' ? 'active' : ''}`}>
                    <NavLink
                        className="py-1.5 w-full items-center justify-center bg-black text-white flex rounded active:hidden"
                        href="/map">
                        Map
                    </NavLink>
                </li>
                <li
                    className={`grow hidden active:block ${path.concat('') == '/map' ? 'active' : ''}`}>
                    <Link
                        className="py-1.5 w-full flex items-center justify-center bg-black text-white rounded"
                        href="/map#filter">
                        Filter
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
