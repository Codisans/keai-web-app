import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import { Logo } from '@/components/atoms/Logo'

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <AuthCard>{children}</AuthCard>
            </div>
        </div>
    )
}

export default Layout
