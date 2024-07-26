import { Logo } from '@/components/blocks/Logo'
import LoginLinks from '@/components/LoginLinks'
import 'swiper/css'

const Home = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center py-10 gap-40">
                <Logo />
                <div className="flex flex-col gap-4 items-center">
                    <LoginLinks />
                </div>
            </div>
        </>
    )
}

export default Home
