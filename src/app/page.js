import { Logo } from '@/components/atoms/Logo'
import 'swiper/css'
import { RootMenu } from './RootMenu'

export const metadata = {
    title: 'KEAI',
}

const Home = () => {
    return (
        <div className="min-h-screen-small flex flex-col">
            <section className="w-full px-gg flex flex-col gap-gg items-center py-10">
                <h1 className="sr-only">KEAI</h1>
                <Logo className="text-[3rem]" type="app" />
            </section>
            <section className="w-full mx-auto px-gg pb-20 flex grow max-w-lg">
                <RootMenu />
            </section>
        </div>
    )
}

export default Home
