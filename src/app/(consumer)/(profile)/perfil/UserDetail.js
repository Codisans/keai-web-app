'use client'

import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

export const UserDetail = () => {
    const { user } = useAuth()

    return (
        <section className="bg-white pt-32 md:pt-40 pb-8">
            <div className="container flex flex-col gap-y-8">
                <h2 className="text-xl">
                    Bienvenido <span className="font-bold">{user?.name}!</span>
                </h2>
                <div className="flex flex-col items-start gap-4">
                    <p className="typo-body text-sm">
                        Ayudanos a mejorar tu experiencia enviandonos tu
                        feedback.
                    </p>
                    <Link href="/feedback" className="button-sm">
                        Enviar feedback
                    </Link>
                </div>
            </div>
        </section>
    )
}
