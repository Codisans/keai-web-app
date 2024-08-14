import { Logo } from '@/components/atoms/Logo'
import 'swiper/css'
import { HomeMenu } from '@/components/molecules/HomeMenu'

export const metadata = {
    title: 'KEAI',
}

const Home = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center py-10 gap-20">
                <Logo />
                <div className="w-full px-gutter flex grow">
                    <HomeMenu />
                </div>
            </div>
        </>
    )
}

export default Home
