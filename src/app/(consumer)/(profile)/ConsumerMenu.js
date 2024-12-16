'use client'
import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import { LogoutButton } from '@/components/atoms/LogoutButton'
import { CategoryLink } from '@/components/atoms/CategoryLink'
import { useConsumerContext } from '../ConsumerContext'

export const ConsumerMenu = () => {
    const { categories } = useConsumerContext()

    return (
        <div className="w-full h-full overflow-y-auto flex flex-col px-gutter pb-4">
            <div className="py-8 sticky top-0 bg-white border-b border-grey-3">
                <Link className="block w-max" href="/eventos">
                    <Logo />
                </Link>
            </div>
            <nav className="">
                <h2 className="uppercase text-caps pt-gutter pb-gg">
                    Categorias
                </h2>
                <ul className="flex flex-col gap-gg pb-gutter pl-gutter">
                    {categories?.map((c, i) => (
                        <li key={i}>
                            <CategoryLink
                                className="underline active:font-bold"
                                category={c}>
                                {c.name}
                            </CategoryLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <ul className="flex flex-col items-end gap-gg py-gg border-t border-grey-3 mt-auto">
                <li>
                    <Button className="gap-2" href="/cuenta">
                        <SettingsIcon />
                        <span>Cuenta</span>
                    </Button>
                </li>
                <li>
                    <Button className="gap-2" href="/perfil">
                        <PersonIcon />
                        <span>Perfil</span>
                    </Button>
                </li>
                <li>
                    <LogoutButton className="gap-2" />
                </li>
            </ul>
        </div>
    )
}
