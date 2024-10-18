'use client'
import { useContext } from 'react'
import { Button } from '@/components/atoms/Button'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import MapIcon from '@mui/icons-material/Map'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import { usePathname } from 'next/navigation'

export const ConsumerFooter = () => {
    const { selectedCategory } = useContext(ConsumerContext)
    const path = usePathname()

    return (
        <footer className="sticky bottom-0 inset-x-0 z-footer border-t border-grey-3 bg-white shrink">
            <nav>
                <ul className="grid grid-cols-3 w-full items-center p-1 gap-x-1">
                    <li className={`col-span-1`}>
                        <Button
                            className="w-full"
                            href={
                                selectedCategory
                                    ? `/eventos/${selectedCategory}`
                                    : '/eventos'
                            }
                            icon={<HomeIcon />}
                        />
                    </li>
                    <li className={`col-span-1 flex justify-cenetr`}>
                        <Button
                            className="w-full"
                            href={
                                selectedCategory
                                    ? `/mapa/${selectedCategory}`
                                    : '/mapa'
                            }
                            icon={<MapIcon />}
                        />
                    </li>
                    <li className="col-span-1">
                        <Button
                            href="/perfil"
                            className="w-full"
                            active={path.includes('/perfil')}
                            icon={<PersonIcon />}
                        />
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
