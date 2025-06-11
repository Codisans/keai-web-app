import { Logo } from '@/components/atoms/Logo'
import { LoginLinks } from './LoginLinks'
import Link from 'next/link'

export const metadata = {
    title: 'KEAI',
}

const Home = () => {
    return (
        <div className="min-h-svh bg-blue-light">
            <section className="container pt-24 pb-4 flex flex-col items-center gap-y-1">
                <Logo className="[font-size:5rem]" type="vertical" />
                <div className="py-6 flex flex-col items-center gap-y-10 col-start-1 col-end-13 md:col-end-7 text-center">
                    <h1 className="text-lg font-medium">
                        Descubre la vida de tu ciudad.
                    </h1>
                </div>
                <Link className="button-lg alt" href="/eventos">
                    Explorar eventos
                </Link>
            </section>
            <img
                className="w-full max-w-content mx-auto block"
                src="/images/keai-poster.jpg"
            />
            <section className="container pb-24 pt-6 flex flex-col items-center text-center gap-10 bg-orange-light">
                <p className="text-lg font-medium leading-relaxed text-grey-dark max-w-[20rem]">
                    Encuentra panoramas y entérate de todo lo que está pasando
                    cerca de ti.
                </p>
                <LoginLinks />
            </section>
        </div>
    )
}

export default Home
