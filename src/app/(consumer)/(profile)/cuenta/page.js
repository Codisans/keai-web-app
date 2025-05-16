import Link from 'next/link'
import { AccountDetail } from './AccountDetail'

export const metadata = {
    title: 'KEAI | Cuenta',
}

const Cuenta = () => {
    return (
        <>
            <div className="pt-32 pb-12 w-full px-gutter flex flex-col gap-8 max-w-7xl mx-auto">
                <h1 className="typo-h1">Cuenta</h1>
                <ul className="flex flex-wrap gap-2 px-2">
                    <li>
                        <Link className='button-sm' href="/privacidad">Privacidad</Link>
                    </li>
                    <li>
                        <Link className='button-sm' href="/restablecer-clave">
                            Preferencias marketing
                        </Link>
                    </li>
                    <li>
                        <Link className='button-sm' href="/restablecer-clave">
                            Restablecer clave
                        </Link>
                    </li>
                </ul>
                <AccountDetail />
            </div>
        </>
    )
}

export default Cuenta
