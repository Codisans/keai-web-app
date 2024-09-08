'use client'
import { useContext } from 'react'
import { Button } from '@/components/atoms/Button'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import MapIcon from '@mui/icons-material/Map'
import GridViewIcon from '@mui/icons-material/GridView'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'
import { FilterToggle } from '@/components/atoms/FilterToggle'

export const ConsumerNavigation = () => {
    const { menuIsOpen, setMenuIsOpen, selectedCategory } =
        useContext(ConsumerContext)

    return (
        <nav className="">
            <ul className="grid grid-cols-5 w-full items-center p-gg gap-x-gg">
                <li className={`col-span-1`}>
                    <Button
                        className="w-full"
                        href={
                            selectedCategory
                                ? `/eventos/${selectedCategory}`
                                : '/eventos'
                        }
                        icon={<GridViewIcon />}
                    />
                </li>
                <li className={`col-span-1 flex justify-cenetr`}>
                    <Button
                        className="w-full"
                        href={
                            selectedCategory
                                ? `/mapa/${selectedCategory}`
                                : '/mapa'
                        }
                        icon={<MapIcon />}
                    />
                </li>
                <li className="col-span-1">
                    <FilterToggle />
                </li>
                <li className="col-span-1">
                    <Button
                        href="/perfil"
                        className="w-full"
                        icon={<PersonIcon />}
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
