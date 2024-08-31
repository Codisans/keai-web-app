import { Logo } from '@/components/atoms/Logo'
import 'swiper/css'
import { RootMenu } from './RootMenu'

export const metadata = {
    title: 'KEAI',
}

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <section className="w-full px-gutter flex justify-center py-10">
                <h1 className="sr-only">KEAI</h1>
                <Logo />
            </section>
            <section className="w-full mx-auto px-gutter pb-20 flex grow max-w-lg">
                <RootMenu />
            </section>
        </div>
    )
}

export default Home
