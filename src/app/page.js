import { Logo } from '@/components/atoms/Logo'
import { RootMenu } from './RootMenu'

export const metadata = {
    title: 'KEAI',
}

const Home = () => {
    return (
        <div className="min-h-svh container flex flex-col gap-y-10 items-center justify-center">
            <section className="w-full flex flex-col items-center gap-y-1">
                <Logo className='[font-size:5rem]' type="logotype" />
                <h1 className="typo-h1">KEAI</h1>
            </section>
            <section className="w-full mx-auto px-grid-gap flex flex-col gap-10">
                <RootMenu />
            </section>
        </div>
    )
}

export default Home
