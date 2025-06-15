'use client'
import { LogoutButton } from '@/components/atoms/LogoutButton'
import { Pullout } from '@/components/molecules/Pullout'
import { useConsumerContext } from '../ConsumerContext'
import { NavLink } from '@/components/atoms/NavLink'
import { Symbol } from '@/components/atoms/Symbol'

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
                                <Symbol className="w-6 h-6" name="home-icon" />
                                <span>Inicio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button-icon" pathname="/mapa">
                                <Symbol className="w-6 h-6" name="map-icon" />
                                <span>Mapa</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button-icon" pathname="/cuenta">
                                <Symbol
                                    className="w-6 h-6"
                                    name="settings-icon"
                                />
                                <span>Cuenta</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="button-icon" pathname="/perfil">
                                <Symbol
                                    className="w-6 h-6"
                                    name="profile-icon"
                                />
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
