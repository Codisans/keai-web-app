import Link from 'next/link'
import { Logo } from '@/components/atoms/Logo'
import { Button } from '@/components/atoms/Button'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import { LogoutButton } from '../atoms/LogoutButton'
import { CategoryLink } from '@/components/atoms/CategoryLink'

export const MainMenu = ({ categories }) => {
    return (
        <div className="w-full h-full overflow-y-auto flex flex-col px-gutter pr-12">
            <div className="py-8">
                <Link href="/eventos">
                    <Logo />
                </Link>
            </div>
            <nav className="border-t border-grey-3">
                <h2 className="uppercase text-caps py-gutter">Categorias</h2>
                <ul className="flex flex-col gap-gutter pb-gutter pl-8">
                    {categories?.map((c, i) => (
                        <li key={i}>
                            <CategoryLink className="underline" category={c}>
                                {c.name}
                            </CategoryLink>
                        </li>
                    ))}
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
