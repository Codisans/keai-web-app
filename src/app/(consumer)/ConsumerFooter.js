'use client'
import MapIcon from '@mui/icons-material/Map'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { NavLink } from '@/components/atoms/NavLink'

export const ConsumerFooter = () => {
    return (
        <footer className="sticky bottom-0 inset-x-0 z-40 py-2 h-16 border-t border-grey bg-white">
            <nav className="container">
                <ul className="grid grid-cols-3 w-full gap-x-2">
                    <li className="col-span-1">
                        <NavLink className="button-icon w-full" href="/mapa">
                            <MapIcon />
                        </NavLink>
                    </li>
                    <li className="col-span-1">
                        <NavLink className="button-icon w-full" href="/eventos">
                            <HomeIcon />
                        </NavLink>
                    </li>
                    <li className="col-span-1">
                        <NavLink className="button-icon w-full" href="/perfil">
                            <PersonIcon />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
