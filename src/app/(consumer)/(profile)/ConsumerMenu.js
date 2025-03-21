'use client'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import { LogoutButton } from '@/components/atoms/LogoutButton'
import { Pullout } from '@/components/templates/Pullout'
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
                            <NavLink className="button" href="/">
                                <span>Inicio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button" href="/cuenta">
                                <SettingsIcon />
                                <span>Cuenta</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button" href="/perfil">
                                <PersonIcon />
                                <span>Perfil</span>
                            </NavLink>
                        </li>
                        <li>
                            <LogoutButton className="gap-2" />
                        </li>
                    </ul>
                </nav>
            </div>
        </Pullout>
    )
}
