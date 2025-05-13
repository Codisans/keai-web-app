'use client'
import MapIcon from '@mui/icons-material/Map'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { NavLink } from '@/components/atoms/NavLink'

export const ConsumerFooter = () => {
    return (
        <footer className="sticky bottom-0 inset-x-0 z-40 py-2 pb-4 border-t border-grey bg-white shrink">
            <nav>
                <ul className="flex justify-center w-full items-center px-gutter gap-x-4">
                    <li>
                        <NavLink className="button-icon w-24" href="/mapa">
                            <MapIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="button-icon w-24" href="/eventos">
                            <HomeIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="button-icon w-24" href="/perfil">
                            <PersonIcon />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
