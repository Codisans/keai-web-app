'use client'
import MapIcon from '@mui/icons-material/Map'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { NavLink } from '@/components/atoms/NavLink'

export const ConsumerFooter = () => {
    return (
        <footer className="sticky bottom-0 inset-x-0 z-40 pb-4 border-t border-grey-3 bg-white shrink">
            <nav>
                <ul className="grid grid-cols-3 w-full items-center p-1 gap-x-1">
                    <li className="col-span-1">
                        <NavLink
                            className="button-icon w-full"
                            pathname="/eventos">
                            <HomeIcon />
                        </NavLink>
                    </li>
                    <li className="col-span-1">
                        <NavLink
                            className="button-icon w-full"
                            pathname="/mapa">
                            <MapIcon />
                        </NavLink>
                    </li>
                    <li className="col-span-1">
                        <NavLink
                            className="button-icon w-full"
                            pathname="/perfil">
                            <PersonIcon />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
