import { Logo } from '@/components/atoms/Logo'
import { RootMenu } from './RootMenu'

export const metadata = {
    title: 'KEAI',
}

const Home = () => {
    return (
        <div className="min-h-svh flex flex-col">
            <section className="w-full px-grid-gap flex flex-col gap-grid items-center py-10">
                <h1 className="sr-only">KEAI</h1>
                <Logo className="text-[3rem]" type="app" />
            </section>
            <section className="w-full mx-auto px-grid-gap pb-20 flex grow max-w-lg flex-col gap-10">
                <RootMenu />
            </section>
        </div>
    )
}

export default Home
