'use client'

import { useAuth } from '@/hooks/auth'
import Loading from '@/app/(app)/Loading'
import { FilterModal } from './FilterModal'

const MapLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <>
            {children}
            <FilterModal />
        </>
    )
}

export default MapLayout
