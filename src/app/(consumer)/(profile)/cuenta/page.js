import { AccountDetail } from './AccountDetail'

export const metadata = {
    title: 'KEAI | Cuenta',
}

const Cuenta = () => {
    return (
        <>
            <div className="pt-32 pb-12 flex flex-col gap-8 container">
                <h1 className="font-tenorite text-3xl">Cuenta</h1>
                <AccountDetail />
            </div>
        </>
    )
}

export default Cuenta
