'use client'
import { useContext } from 'react'
import { Button } from '@/components/atoms/Button'
import { UiContext } from '@/app/AppContext'
import { useAuth } from '@/hooks/auth'
import MapIcon from '@mui/icons-material/Map'
import ListIcon from '@mui/icons-material/List'
import HomeIcon from '@mui/icons-material/Home'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const MainNavigation = () => {
    const user = useAuth()
    const { setFilterIsOpen, filterIsOpen, menuIsOpen, setMenuIsOpen } =
        useContext(UiContext)

    return (
        user && (
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
                            onClick={() => setFilterIsOpen(s => !s)}
                            className="w-full "
                            active={filterIsOpen}
                            icon={<FilterAltIcon />}
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
                            onClick={() => setMenuIsOpen(s => !s)}
                            className="w-full"
                            active={menuIsOpen}
                            icon={<MenuOpenIcon />}
                        />
                    </li>
                </ul>
            </nav>
        )
    )
}
