import { MainMenu } from '@/components/molecules/MainMenu'
import { UserHeader } from './UserHeader'
import { UserFooter } from './UserFooter'
import { MenuPullout } from '@/components/molecules/MenuPullout'
import { getCategories } from '@/api/getCategories'

const UserLayout = async ({ children }) => {
    const categories = await getCategories()
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
