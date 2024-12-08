import {
    AnimatedLogo,
    AnimatedLogo2,
    Logo,
    Logo2,
    Logo3,
} from '@/components/atoms/Logo'
import { Aladin, Barrio, Staatliches, Yusei_Magic } from 'next/font/google'

const aladin = Aladin({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})

const barrio = Barrio({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})

const staatliches = Staatliches({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})

const yuseiMagic = Yusei_Magic({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})

const TestPage = () => {
    return (
        <div className="w-full h-max flex flex-col items-center px-guter gap-20 py-header">
            <AnimatedLogo2 background="gradient" className="w-64 h-64" />
            <Logo3 className="[font-size:8rem;]" />
            <Logo className="[font-size:8rem;]" type="app" />
            <Logo className="[font-size:8rem;]" />
            <Logo
                className={`[font-size:8rem;] ${aladin.className}`}
                type="app"
            />
            <Logo className={`[font-size:8rem;] ${aladin.className}`} />
            <Logo
                className={`[font-size:8rem;] ${barrio.className}`}
                type="app"
            />
            <Logo className={`[font-size:8rem;] ${barrio.className}`} />
            <Logo
                className={`[font-size:8rem;] ${staatliches.className}`}
                type="app"
            />
            <Logo className={`[font-size:8rem;] ${staatliches.className}`} />
            <Logo
                className={`[font-size:8rem;] ${yuseiMagic.className}`}
                type="app"
            />
            <Logo className={`[font-size:8rem;] ${yuseiMagic.className}`} />
            <AnimatedLogo className="w-64 h-64" />
            <AnimatedLogo background="collage" className="w-64 h-64" />
            <Logo2 className="[font-size:8rem;]" />
        </div>
    )
}

export default TestPage
