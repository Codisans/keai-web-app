'use client'
import { useParams, usePathname } from 'next/navigation'
import { Button } from '@/components/partials/Button'
import { useEffect } from 'react'
import { ButtonLink } from '@/components/partials/Link'

const Navigation = () => {
    const path = usePathname().concat('')
    const hash = useParams().hash

    useEffect(() => {
        console.log(path, hash)
    }, [])

    return (
        <nav className="h-nav flex-none z-50 bg-white relative flex">
            <ul className="grid grid-cols-2 w-full items-center px-gutter gap-x-gutter">
                {['/browse', '/dashboard'].includes(path) && (
                    <li className={`col-span-1`}>
                        <ButtonLink
                            className="w-full block active:hidden"
                            href="/map">
                            Map
                        </ButtonLink>
                    </li>
                )}
                {['/map', '/dashboard'].includes(path) && (
                    <li
                        className={`col-span-1 active:hidden ${path == '/browse' ? 'active' : ''}`}>
                        <ButtonLink
                            className="w-full block active:hidden"
                            href="/browse">
                            List
                        </ButtonLink>
                    </li>
                )}
                {['/map'].includes(path) && (
                    <li className="col-span-1 block">
                        <Button className="w-full text-center">Filter</Button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation
