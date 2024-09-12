import { ProfileHeader } from './ProfileHeader'
import { ConsumerFooter } from '../ConsumerFooter'

const UserLayout = ({ children }) => {
    return (
        <>
            <ProfileHeader />
            <main className="w-full grow relative flex flex-col mx-auto max-w-2xl">
                {children}
            </main>
            <ConsumerFooter />
        </>
    )
}

export default UserLayout
