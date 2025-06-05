import { Logo } from '@/components/atoms/Logo'

const AuthCard = ({ children }) => (
    <div className="py-header px-grid-gap flex flex-col items-center rounded-ui gap-y-6 mx-auto max-w-md">
        <div className="flex flex-col items-center gap-1 py-10">
            <Logo className="[font-size:6rem]" type="logotype" />
            <span className="text-4xl font-bold lowercase">Keai</span>
        </div>
        <div className="w-full p-grid-gap">{children}</div>
    </div>
)

export default AuthCard
