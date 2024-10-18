import { ConsumerFooter } from '../ConsumerFooter'

const AppLayout = ({ children }) => {
    return (
        <div className="w-full flex flex-col min-h-screen-small">
            {children}
            <ConsumerFooter />
        </div>
    )
}

export default AppLayout
