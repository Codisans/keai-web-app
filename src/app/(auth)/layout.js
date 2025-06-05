import AuthCard from '@/app/(auth)/AuthCard'

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-black antialiased">
                <AuthCard>{children}</AuthCard>
            </div>
        </div>
    )
}

export default Layout
