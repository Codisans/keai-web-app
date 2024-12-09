import {
    AnimatedLogo,
    AnimatedLogo2,
    Logo,
    Logo2,
    Logo3,
} from '@/components/atoms/Logo'
import { Staatliches, Jockey_One, Squada_One, Teko } from 'next/font/google'

const staatliches = Staatliches({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})

const jockeyOne = Jockey_One({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})

const squadaOne = Squada_One({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})

const teko = Teko({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})

const TestPage = () => {
    return (
        <div className="w-full h-max flex flex-col items-center px-guter gap-20 py-header">
            <div className="flex items-center justify-center flex-wrap gap-12">
                <Logo className="[font-size:8rem;] font-tenorite" type="app" />
                <Logo className="[font-size:8rem;] font-tenorite" />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-12">
                <Logo
                    className={`[font-size:8rem;] ${staatliches.className}`}
                    type="app"
                />
                <Logo
                    className={`[font-size:8rem;] ${staatliches.className}`}
                />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-12 uppercase">
                <Logo
                    className={`[font-size:8rem;] ${jockeyOne.className}`}
                    type="app"
                />
                <Logo className={`[font-size:8rem;] ${jockeyOne.className}`} />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-12">
                <Logo
                    className={`[font-size:8rem;] ${jockeyOne.className}`}
                    type="app"
                />
                <Logo className={`[font-size:8rem;] ${jockeyOne.className}`} />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-12 uppercase">
                <Logo
                    className={`[font-size:8rem;] ${squadaOne.className}`}
                    type="app"
                />
                <Logo className={`[font-size:8rem;] ${squadaOne.className}`} />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-12">
                <Logo
                    className={`[font-size:8rem;] ${squadaOne.className}`}
                    type="app"
                />
                <Logo className={`[font-size:8rem;] ${squadaOne.className}`} />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-12 uppercase">
                <Logo
                    className={`[font-size:8rem;] ${teko.className}`}
                    type="app"
                />
                <Logo className={`[font-size:8rem;] ${teko.className}`} />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-12">
                <Logo
                    className={`[font-size:8rem;] ${teko.className}`}
                    type="app"
                />
                <Logo className={`[font-size:8rem;] ${teko.className}`} />
            </div>
            <AnimatedLogo2 background="gradient" className="w-64 h-64" />
            <Logo3 className="[font-size:8rem;]" />
            <AnimatedLogo className="w-64 h-64" />
            <AnimatedLogo background="collage" className="w-64 h-64" />
            <Logo2 className="[font-size:8rem;]" />
        </div>
    )
}

export default TestPage
