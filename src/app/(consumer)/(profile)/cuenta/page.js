import { AccountDetail } from './AccountDetail'

export const metadata = {
    title: 'KEAI | Cuenta',
}

const Cuenta = () => {
    return (
        <>
            <div className="pt-32 pb-12 w-full px-gutter flex flex-col gap-8 max-w-7xl mx-auto">
                <h1 className="typo-h1">Cuenta</h1>
                <AccountDetail />
            </div>
        </>
    )
}

export default Cuenta
