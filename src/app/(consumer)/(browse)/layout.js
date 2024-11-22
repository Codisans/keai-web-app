import { ConsumerFooter } from '../ConsumerFooter'
import { FilterProvider } from './FilterContext'

const AppLayout = ({ children }) => {
    return (
        <FilterProvider>
            <div className="w-full flex flex-col min-h-screen-small">
                {children}
                <ConsumerFooter />
            </div>
        </FilterProvider>
    )
}

export default AppLayout
