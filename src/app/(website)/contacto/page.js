import { Logo } from '@/components/atoms/Logo'
import Link from 'next/link'

export const metadata = {
    title: 'keai | Contacto',
}

export default function Contacto() {
    return (
        <header className="container pt-24 pb-4 flex flex-col items-center gap-y-1">
            <Logo className="[font-size:5rem]" type="vertical" />
            <div className="py-6 flex flex-col items-center gap-y-10 col-start-1 col-end-13 md:col-end-7 text-center">
                <h1 className="text-xl my-20 font-tenorite">Contacto</h1>
            </div>
            <Link
                className="underline text-4xl"
                href="mailto:contacto@keai.cl"
                target="_blank">
                contacto@keai.cl
            </Link>
        </header>
    )
}
