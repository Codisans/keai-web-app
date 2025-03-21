import { ConsumerFooter } from '../ConsumerFooter'

const AppLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-svh">
            {children}
            <ConsumerFooter />
        </div>
    )
}

export default AppLayout
