import { MainMenu } from '@/components/molecules/MainMenu'
import { UserHeader } from './UserHeader'
import { UserFooter } from './UserFooter'
import { MenuPullout } from '@/components/molecules/MenuPullout'

const AppLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <UserHeader />
            <MenuPullout />
            <main className="w-full grow relative flex flex-col">
                {children}
            </main>
            <UserFooter />
        </div>
    )
}

export default AppLayout
