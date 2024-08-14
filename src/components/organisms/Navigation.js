'use client'
import { useParams, usePathname } from 'next/navigation'
import { useContext, useEffect } from 'react'
import MapIcon from '@mui/icons-material/Map'
import ListIcon from '@mui/icons-material/List'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { Button } from '@/components/atoms/Button'
import { UiContext } from '../../app/AppContext'
import { useAuth } from '@/hooks/auth'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'

export const Navigation = () => {
    const user = useAuth()
    const path = usePathname().concat('')
    const hash = useParams().hash
    const { setFilterIsOpen, setMenuIsOpen } = useContext(UiContext)

    useEffect(() => {
        console.log(path, hash)
    }, [])

    return (
        user && (
            <nav className="sticky bottom-0 inset-x-0 z-nav bg-white border-t border-grey-light">
                <ul className="grid grid-cols-3 w-full items-center p-gutter gap-x-gutter">
                    {['/mapa', '/perfil', '/cuenta'].includes(path) && (
                        <li
                            className={`col-span-1 active:hidden ${path == '/eventos' ? 'active' : ''}`}>
                            <Button
                                className="w-full active:hidden"
                                href="/eventos"
                                icon={<ListIcon />}
                            />
                        </li>
                    )}
                    {['/eventos', '/perfil', '/cuenta'].includes(path) && (
                        <li className={`col-span-1 flex justify-cenetr`}>
                            <Button
                                className="w-full active:hidden"
                                href="/mapa"
                                icon={<MapIcon />}
                            />
                        </li>
                    )}
                    {['/eventos', '/mapa'].includes(path) && (
                        <li className="col-span-1">
                            <Button
                                onClick={() => setFilterIsOpen(s => !s)}
                                className="w-full active:hidden"
                                icon={<FilterAltIcon />}
                            />
                        </li>
                    )}
                    <li className="col-span-1">
                        <Button
                            onClick={() => setMenuIsOpen(s => !s)}
                            className="w-full active:hidden"
                            icon={<ManageAccountsIcon />}
                        />
                    </li>
                </ul>
            </nav>
        )
    )
}
