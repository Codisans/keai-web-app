import { Button } from '@/components/atoms/Button'

export const metadata = {
    title: 'KEAI | Dashboard',
}

const Venues = () => {
    return (
        <>
            <div className="py-12 flex flex-col gap-8 max-w-7xl mx-auto">
                <ul className="flex flex-col gap-gutter px-gutter">
                    <li>
                        <Button href="/mis-eventos">Mis eventos</Button>
                    </li>
                    <li>
                        <Button href="/venues/crear">Crear venue</Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Venues
