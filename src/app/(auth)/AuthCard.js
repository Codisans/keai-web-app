import { Logo } from '@/components/atoms/Logo'

const AuthCard = ({ children }) => (
    <div className="py-header px-gg flex flex-col items-center rounded-ui gap-y-6 mx-auto max-w-md">
        <Logo className="[font-size:3rem]" type="app" />
        <div className="w-full p-gg">{children}</div>
    </div>
)

export default AuthCard
