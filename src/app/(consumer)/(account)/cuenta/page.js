import { UserDetail } from './UserDetail'
import { Button } from '@/components/atoms/Button'

export const metadata = {
    title: 'KEAI | Cuenta',
}

const Cuenta = () => {
    return (
        <>
            <div className="py-12 flex flex-col gap-8 max-w-7xl mx-auto">
                <ul className="flex flex-col px-gutter gap-gutter">
                    <li>Configuration de cuenta</li>
                    <li>
                        <UserDetail />
                    </li>
                    <li>
                        <Button>Privacidad</Button>
                    </li>
                    <li>
                        <Button href="/restablecer-clave">
                            Preferencias marketing
                        </Button>
                    </li>
                    <li>
                        <Button href="/restablecer-clave">
                            Restablecer clave
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Cuenta
