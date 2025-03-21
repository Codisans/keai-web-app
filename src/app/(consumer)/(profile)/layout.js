import { ProfileHeader } from './ProfileHeader'
import { ConsumerFooter } from '../ConsumerFooter'
import { ConsumerMenu } from './ConsumerMenu'

const UserLayout = ({ children }) => {
    return (
        <>
            <ProfileHeader />
            <ConsumerMenu />
            <main className="w-full grow relative flex flex-col mx-auto max-w-2xl pt-20">
                {children}
            </main>
            <ConsumerFooter />
        </>
    )
}

export default UserLayout
