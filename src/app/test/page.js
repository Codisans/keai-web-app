import {
    AnimatedLogo,
    AnimatedLogo2,
    Logo,
    Logo2,
    Logo3,
} from '@/components/atoms/Logo'

const TestPage = () => {
    return (
        <div className="w-full h-max flex flex-col items-center px-guter gap-20 py-header">
            <Logo className="[font-size:8rem;]" type="app" />
            <Logo className="[font-size:8rem;]" />
            <AnimatedLogo className="w-64 h-64" />
            <AnimatedLogo background="collage" className="w-64 h-64" />
            <Logo2 className="[font-size:8rem;]" />
            <AnimatedLogo2 background="gradient" className="w-64 h-64" />
            <Logo3 className="[font-size:8rem;]" />
        </div>
    )
}

export default TestPage
