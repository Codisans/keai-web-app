'use client'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/atoms/Button'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import { useAuth } from '@/hooks/auth'

export const UserNav = () => {
    const { logout } = useAuth()
    const path = usePathname()
    const router = useRouter()

    return (
        ['perfil', 'cuenta'].some(x => path.split('/').includes(x)) && (
            <nav className="w-full p-gutter">
                <ul className="w-full grid grid-cols-5 gap-gutter">
                    <li className="col-span-2">
                        <Button
                            className="w-full"
                            onClick={() => router.back()}>
                            Go back
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button
                            className="w-full"
                            href="/cuenta"
                            icon={<SettingsIcon />}
                        />
                    </li>
                    <li className="col-span-1">
                        <Button
                            className="w-full"
                            href="/perfil"
                            icon={<PersonIcon />}
                        />
                    </li>
                    <li className="col-span-1">
                        <Button
                            className="w-full"
                            onClick={logout}
                            icon={<LogoutIcon />}
                        />
                    </li>
                </ul>
            </nav>
        )
    )
}
