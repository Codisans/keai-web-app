'use client'
import { useContext } from 'react'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { Pullout } from '../templates/Pullout'

export const PulloutMenu = ({ children }) => {
    const { menuIsOpen, setMenuIsOpen } = useContext(ConsumerContext)

    return (
        <Pullout isOpen={menuIsOpen} setIsOpen={setMenuIsOpen}>
            {children}
        </Pullout>
    )
}
