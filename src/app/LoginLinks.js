'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="fiex top-0 inset-x-0 h-16 flex items-center px-6 z-50">
            {user ? (
                <Link
                    href="/dashboard"
                    className="ml-4 text-sm text-gray-700 underline">
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="text-sm text-gray-700 underline">
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="ml-4 text-sm text-gray-700 underline">
                        Register
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
