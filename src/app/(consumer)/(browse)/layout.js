import { Header } from './Header'
import { Footer } from './Footer'
import { FilterModal } from './FilterModal'
import { FilterForm } from '@/components/organisms/FilterForm'

const AppLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen">
            <Header />
            <main className="w-full grow relative flex">{children}</main>
            <FilterModal>
                <FilterForm />
            </FilterModal>
            <Footer />
        </div>
    )
}

export default AppLayout
