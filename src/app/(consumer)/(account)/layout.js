import { UserHeader } from './UserHeader'
import { UserFooter } from './UserFooter'

const UserLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <UserHeader />
            <main className="w-full grow relative flex flex-col">
                {children}
            </main>
            <UserFooter />
        </div>
    )
}

export default UserLayout
