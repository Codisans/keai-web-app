import { Header } from './Header'
import { Footer } from './Footer'
import { FilterModal } from './FilterModal'
import { MenuPullout } from '@/components/molecules/MenuPullout'

const AppLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Header />
            <MenuPullout />
            <main className="w-full grow relative flex">{children}</main>
            <FilterModal />
            <Footer />
        </div>
    )
}

export default AppLayout
