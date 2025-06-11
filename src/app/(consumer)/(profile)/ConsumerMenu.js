'use client'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import HomeIcon from '@mui/icons-material/Home'
import MapIcon from '@mui/icons-material/Map'
import { LogoutButton } from '@/components/atoms/LogoutButton'
import { Pullout } from '@/components/molecules/Pullout'
import { useConsumerContext } from '../ConsumerContext'
import { NavLink } from '@/components/atoms/NavLink'

export const ConsumerMenu = () => {
    const { menuIsOpen, setMenuIsOpen } = useConsumerContext()

    return (
        <Pullout isOpen={menuIsOpen} setIsOpen={setMenuIsOpen}>
            <div className="w-full h-full overflow-y-auto flex flex-col px-gutter pb-4">
                <nav className="my-auto">
                    <ul className="flex flex-col items-end gap-grid p-gutter">
                        <li>
                            <NavLink
                                className="button-icon"
                                pathname="/eventos">
                                <HomeIcon />
                                <span>Inicio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button-icon" pathname="/mapa">
                                <MapIcon />
                                <span>Mapa</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button-icon" pathname="/cuenta">
                                <SettingsIcon />
                                <span>Cuenta</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button-icon" pathname="/perfil">
                                <PersonIcon />
                                <span>Perfil</span>
                            </NavLink>
                        </li>
                        <li>
                            <LogoutButton />
                        </li>
                    </ul>
                </nav>
            </div>
        </Pullout>
    )
}
