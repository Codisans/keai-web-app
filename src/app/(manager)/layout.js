import { ManagerHeader } from './ManagerHeader'
import { ManagerFooter } from './ManagerFooter'
import { PulloutMenu } from '@/components/molecules/PulloutMenu'
import { ManagerContextProvider } from './ManagerContext'

const ManagerLayout = ({ children }) => {
    return (
        <ManagerContextProvider>
            <div className="w-full flex flex-col min-h-screen">
                <ManagerHeader />
                <PulloutMenu>Menu</PulloutMenu>
                <main className="w-full grow relative flex flex-col max-w-[1024px] mx-auto">
                    {children}
                </main>
                <ManagerFooter />
            </div>
        </ManagerContextProvider>
    )
}

export default ManagerLayout
