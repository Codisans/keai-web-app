import { Button } from '@/components/atoms/Button'

export const metadata = {
    title: 'KEAI | Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <div className="py-12 flex flex-col gap-8 max-w-7xl mx-auto">
                <ul className="flex flex-col gap-gutter px-gutter">
                    <li>
                        <Button href="/mis-eventos">Eventos</Button>
                    </li>
                    <li>
                        <Button href="/mis-eventos/crear">
                            Eventos guardados
                        </Button>
                    </li>
                    <li>
                        <Button href="/venues">Seguir perfiles</Button>
                    </li>
                    <li>
                        <Button href="/venues/crear">Seguidores</Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Dashboard
