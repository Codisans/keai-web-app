import { AccountDetail } from './AccountDetail'
import { Button } from '@/components/atoms/Button'

export const metadata = {
    title: 'KEAI | Cuenta',
}

const Cuenta = () => {
    return (
        <>
            <div className="py-12 w-full px-gutter flex flex-col gap-8 max-w-7xl mx-auto">
                <h1 className="typo-h1">Cuenta</h1>
                <ul className="flex flex-wrap gap-2 px-2">
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
                <AccountDetail />
            </div>
        </>
    )
}

export default Cuenta
