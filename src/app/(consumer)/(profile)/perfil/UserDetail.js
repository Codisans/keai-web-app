'use client'

import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

export const UserDetail = () => {
    const { user } = useAuth()

    return (
        <section className="bg-white pt-32 md:pt-40 pb-4">
            <div className="container flex flex-col gap-y-8">
                <h2 className="text-xl">
                    Bienvenido <span className="font-bold">{user?.name}!</span>
                </h2>
                <div className="flex flex-row flex-nowrap justify-between items-center gap-2 p-2 bg-white-true  border border-grey rounded-button">
                    <p className="typo-body text-sm px-1">
                        Ayudanos a mejorar tu experiencia.
                    </p>
                    <Link
                        href="/feedback"
                        className="button-sm bg-black w-max text-nowrap dark">
                        Enviar feedback
                    </Link>
                </div>
            </div>
        </section>
    )
}
