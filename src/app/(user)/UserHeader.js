// import { UserHeader } from '@/components/molecules/UserHeader'

import { UserNav } from './UserNav'

export const UserHeader = () => {
    return (
        <header className="sticky top-0 inset-0 shadow z-header bg-white shrink">
            <UserNav />
        </header>
    )
}
