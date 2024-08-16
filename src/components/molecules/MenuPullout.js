'use client'
import { useContext } from 'react'
import { UiContext } from '@/app/AppContext'
import { MainMenu } from './MainMenu'
import { Pullout } from '../templates/Pullout'

export const MenuPullout = () => {
    const { menuIsOpen, setMenuIsOpen } = useContext(UiContext)

    return (
        <Pullout isOpen={menuIsOpen} setIsOpen={setMenuIsOpen}>
            <MainMenu />
        </Pullout>
    )
}
