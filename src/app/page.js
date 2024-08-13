import { Logo } from '@/components/atoms/Logo'
import 'swiper/css'
import MuiTheme from './MuiTheme'
import { MainMenu } from '@/components/molecules/MainMenu'

export const metadata = {
    title: 'KEAI',
}

const Home = () => {
    return (
        <MuiTheme>
            <div className="w-full h-full flex flex-col items-center py-10 gap-20">
                <Logo />
                <div className="w-full px-gutter flex grow">
                    <MainMenu />
                </div>
            </div>
        </MuiTheme>
    )
}

export default Home
