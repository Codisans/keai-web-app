import { FilterModal } from './FilterModal'
import { FilterForm } from '@/components/organisms/FilterForm'
import { ConsumerFooter } from '../ConsumerFooter'

const AppLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen-small">
            {children}
            <FilterModal>
                <FilterForm />
            </FilterModal>
            <ConsumerFooter />
        </div>
    )
}

export default AppLayout
