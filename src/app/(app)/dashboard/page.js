import Header from '@/app/(app)/Header'
import NavLink from '@/components/NavLink'
import Link from 'next/link'
import { UserDetail } from './UserDetail'

export const metadata = {
    title: 'FOMO - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <div className="py-12 flex flex-col gap-8 max-w-7xl mx-auto">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        You are logged in!
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200">
                        <UserDetail />
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200"></div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
