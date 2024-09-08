import { Header } from './Header'
import { FilterModal } from './FilterModal'
import { FilterForm } from '@/components/organisms/FilterForm'
import { ConsumerFooter } from '../ConsumerFooter'

const AppLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen-small">
            <Header />
            <main className="w-full grow relative flex">{children}</main>
            <FilterModal>
                <FilterForm />
            </FilterModal>
            <ConsumerFooter />
        </div>
    )
}

export default AppLayout
