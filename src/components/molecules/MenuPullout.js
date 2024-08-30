'use client'
import { useContext } from 'react'
import { UiContext } from '@/app/AppContext'
import { MainMenu } from './MainMenu'
import { Pullout } from '../templates/Pullout'

export const MenuPullout = ({ children }) => {
    const { menuIsOpen, setMenuIsOpen } = useContext(UiContext)

    return (
        <Pullout isOpen={menuIsOpen} setIsOpen={setMenuIsOpen}>
            {children}
        </Pullout>
    )
}
