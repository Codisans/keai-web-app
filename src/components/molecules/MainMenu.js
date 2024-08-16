import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import PersonIcon from '@mui/icons-material/Person'
import { getCategories } from '@/api/getCategories'
import SettingsIcon from '@mui/icons-material/Settings'
import { TextLink } from '../atoms/TextLink'
import { LogoutButton } from '../atoms/LogoutButton'

export const MainMenu = () => {
    // const categories = getCategories()

    return (
        <div className="w-full h-full overflow-y-auto flex flex-col px-gutter pr-12">
            <div className="py-8">
                <Link href="/events">
                    <Logo />
                </Link>
            </div>
            <nav className="border-t border-grey-3">
                <ul className="flex flex-col gap-gutter py-gutter">
                    <li className="uppercase text-caps">Categorias</li>
                    <li>
                        <TextLink href="/eventos/2">Deportes</TextLink>
                    </li>
                    <li>
                        <TextLink href="/eventos/2">Artes</TextLink>
                    </li>
                    <li>
                        <TextLink href="/eventos/2">Comedia</TextLink>
                    </li>
                    <li>
                        <TextLink href="/eventos/2">Gastronomia</TextLink>
                    </li>
                </ul>
            </nav>
            <ul className="flex flex-col items-end gap-gutter py-gutter border-t border-grey-3 mt-auto">
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
