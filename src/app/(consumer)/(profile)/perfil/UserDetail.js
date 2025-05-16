'use client'

import { useAuth } from '@/hooks/auth'

export const UserDetail = () => {
    const { user } = useAuth()

    return (
        <section className="bg-white pt-32 md:pt-40 pb-8">
            <div className='container'>
                <h2 className='text-xl'>
                    Bienvenido <span className="font-bold">{user?.name}!</span>
                </h2>
            </div>
        </section>
    )
}
