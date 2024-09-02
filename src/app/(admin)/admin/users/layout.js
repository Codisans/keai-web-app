'use client'

import { useAuth } from '@/hooks/auth'
import { Loading } from '@/app/Loading'
import { UsersSideBar } from './UsersSideBar'
import { useEffect } from 'react'

const AdminUsersLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        console.log(user)
    }, [user])

    if (!user) {
        return <Loading />
    }

    return (
        <div className="grid grid-cols-12 h-full w-full">
            <div className="row-start-1 col-start-4 relative col-end-13 flex flex-col overflow-y-auto">
                {children}
            </div>
            <UsersSideBar />
        </div>
    )
}

export default AdminUsersLayout
