// 'use client'

// import { useAuth } from '@/hooks/auth'
// import { Loading } from '@/app/Loading'
import { TagListingSideBar } from './TagListingSideBar'
// import { useEffect } from 'react'

const AdminTagsLayout = ({ children }) => {
    // const { user } = useAuth({ middleware: 'auth' })

    // useEffect(() => {
    //     console.log(user)
    // }, [user])

    // if (!user) {
    //     return <Loading />
    // }

    return (
        <div className="grid grid-cols-12 h-full w-full">
            <div className="row-start-1 col-start-4 col-end-13 overflow-y-auto">
                {children}
            </div>
            <TagListingSideBar />
        </div>
    )
}

export default AdminTagsLayout