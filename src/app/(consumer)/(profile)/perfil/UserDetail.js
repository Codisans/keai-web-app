'use client'

import { useAuth } from '@/hooks/auth'

export const UserDetail = () => {
    const { user } = useAuth()

    return (
        <section className="w-full grid grid-cols-12 p-grid-gap gap-grid">
            <div className="col-span-4">
                <div className="w-full pt-[100%] relative rounded-full overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-grey"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center col-span-8">
                <div>Welcome back {user?.name}!</div>
            </div>
        </section>
    )
}
