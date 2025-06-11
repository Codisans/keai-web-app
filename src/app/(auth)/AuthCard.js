import { Logo } from '@/components/atoms/Logo'
import Link from 'next/link'

const AuthCard = () => (
    <div className="py-header px-grid-gap flex flex-col items-center rounded-ui gap-y-10 mx-auto max-w-md">
        <Link href="/">
            <Logo
                className="[font-size:4rem] md:[font-size:5rem]"
                type="vertical"
            />
            <span className="sr-only">Keai home</span>
        </Link>
    </div>
)

export default AuthCard
