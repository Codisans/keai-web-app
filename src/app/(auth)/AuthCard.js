import { Logo } from '@/components/atoms/Logo'

const AuthCard = ({ children }) => (
    <div className="py-header px-gutter flex flex-col items-center rounded-ui gap-y-6">
        <Logo className="[font-size:3rem]" type="app" />
        <div className="w-full p-gutter">{children}</div>
    </div>
)

export default AuthCard
