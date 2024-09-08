import { ProfileHeader } from './ProfileHeader'
import { ConsumerFooter } from '../ConsumerFooter'

const UserLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen-small">
            <ProfileHeader />
            <main className="w-full grow relative flex flex-col">
                {children}
            </main>
            <ConsumerFooter />
        </div>
    )
}

export default UserLayout
