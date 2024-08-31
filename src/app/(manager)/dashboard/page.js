import { Button } from '@/components/atoms/Button'

export const metadata = {
    title: 'KEAI | Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <div className="py-12 flex flex-col gap-8 max-w-7xl mx-auto">
                <ul className="grid grid-cols-2 gap-gutter px-gutter">
                    <li className="col-span-1">
                        <Button className="w-full" href="/mis-eventos">
                            Mis Eventos
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button className="w-full" href="/venues">
                            Venues
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button className="w-full" href="/mis-eventos/crear">
                            Crear evento
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button className="w-full" href="/venues/crear">
                            Crear venue
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Dashboard
