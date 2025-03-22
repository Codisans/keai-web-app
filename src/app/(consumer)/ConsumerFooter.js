'use client'
import MapIcon from '@mui/icons-material/Map'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { NavLink } from '@/components/atoms/NavLink'

export const ConsumerFooter = () => {
    return (
        <footer className="sticky bottom-0 inset-x-0 z-40 pb-6 pt-1 border-t border-grey bg-white shrink">
            <nav>
                <ul className="grid grid-cols-3 w-full items-center px-gutter gap-x-grid-gap">
                    <li className="col-span-1">
                        <NavLink className="button-icon w-full" href="/eventos">
                            <HomeIcon />
                        </NavLink>
                    </li>
                    <li className="col-span-1">
                        <NavLink className="button-icon w-full" href="/mapa">
                            <MapIcon />
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
