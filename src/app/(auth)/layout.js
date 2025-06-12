import AuthCard from '@/app/(auth)/AuthCard'

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-black bg-white min-h-svh antialiased pt-10 pb-20 max-w-[420px] px-4 container">
                <AuthCard />
                {children}
            </div>
        </div>
    )
}

export default Layout
