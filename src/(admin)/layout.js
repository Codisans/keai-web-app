import { AdminContextProvider } from './AdminContext'
import { AdminHeader } from './AdminHeader'

const AdminLayout = ({ children }) => {
    return (
        <AdminContextProvider>
            <div className="h-screen-small flex flex-col">
                <AdminHeader />
                <main className="overflow-hidden grow">{children}</main>
            </div>
        </AdminContextProvider>
    )
}

export default AdminLayout