import { ProfileHeader } from './ProfileHeader'
import { ConsumerFooter } from '../ConsumerFooter'
import { PulloutMenu } from '@/components/molecules/PulloutMenu'
import { ConsumerMenu } from './ConsumerMenu'

const UserLayout = ({ children }) => {
    return (
        <>
            <PulloutMenu>
                <ConsumerMenu />
            </PulloutMenu>
            <ProfileHeader />
            <main className="w-full grow relative flex flex-col mx-auto max-w-2xl">
                {children}
            </main>
            <ConsumerFooter />
        </>
    )
}

export default UserLayout
