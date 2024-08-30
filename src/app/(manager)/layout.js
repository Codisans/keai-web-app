import { MainMenu } from '@/components/molecules/MainMenu'
import { ManagerHeader } from './ManagerHeader'
import { ManagerFooter } from './ManagerFooter'
import { MenuPullout } from '@/components/molecules/MenuPullout'

const ManagerLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <ManagerHeader />
            <MenuPullout />
            <main className="w-full grow relative flex flex-col max-w-[1024px] mx-auto">
                {children}
            </main>
            <ManagerFooter />
        </div>
    )
}

export default ManagerLayout
