import { Button } from '@/components/atoms/Button'
import { UserDetail } from './UserDetail'

export const metadata = {
    title: 'KEAI | Perfil',
}

const Profile = () => {
    return (
        <>
            <div className="py-12 flex flex-col gap-8 max-w-7xl mx-auto">
                <ul className="flex flex-col gap-gutter px-gutter">
                    <li>
                        Tu perfil
                        <UserDetail />
                    </li>
                    <li>
                        <Button>Tags favoritos</Button>
                    </li>
                    <li>
                        <Button href="/favoritos">Eventos guardados</Button>
                    </li>
                    <li>
                        <Button>Eventos historicos</Button>
                    </li>
                    <li>
                        <Button>Seguir perfiles</Button>
                    </li>
                    <li>
                        <Button>Seguidores</Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Profile
