import AuthCard from '@/app/(auth)/AuthCard'

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-black antialiased pt-10 pb-20 max-w-[420px] container">
                <AuthCard />
                {children}
            </div>
        </div>
    )
}

export default Layout
