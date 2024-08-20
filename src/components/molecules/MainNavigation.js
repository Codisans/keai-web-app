'use client'
import { useContext } from 'react'
import { Button } from '@/components/atoms/Button'
import { UiContext } from '@/app/AppContext'
import MapIcon from '@mui/icons-material/Map'
import HomeIcon from '@mui/icons-material/Home'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import MenuIcon from '@mui/icons-material/Menu'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { usePathname } from 'next/navigation'

export const MainNavigation = () => {
    const { setFilterIsOpen, filterIsOpen, menuIsOpen, setMenuIsOpen } =
        useContext(UiContext)
    const path = usePathname()

    return (
        <nav className="">
            <ul className="grid grid-cols-5 w-full items-center p-gutter gap-x-gutter">
                <li className={`col-span-1`}>
                    <Button
                        className="w-full"
                        href="/eventos"
                        icon={<HomeIcon />}
                    />
                </li>
                <li className={`col-span-1 flex justify-cenetr`}>
                    <Button
                        className="w-full"
                        href="/mapa"
                        icon={<MapIcon />}
                    />
                </li>

                <li className="col-span-1">
                    <Button
                        href="/favoritos"
                        className="w-full"
                        icon={<FavoriteIcon />}
                    />
                </li>
                <li className="col-span-1">
                    <Button
                        onClick={() => setFilterIsOpen(s => !s)}
                        className="w-full "
                        disabled={path
                            .split('/')
                            ?.some(x =>
                                ['favoritos', 'perfil', 'cuenta'].includes(x),
                            )}
                        active={filterIsOpen}
                        icon={<FilterAltIcon />}
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
    )
}
