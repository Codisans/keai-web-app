'use client'
import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { MainMenu } from './MainMenu'
import { Pullout } from '../templates/Pullout'

export const MenuPullout = ({ children }) => {
    const { menuIsOpen, setMenuIsOpen } = useContext(ConsumerContext)

    return (
        <Pullout isOpen={menuIsOpen} setIsOpen={setMenuIsOpen}>
            {children}
        </Pullout>
    )
}
