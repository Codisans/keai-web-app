import api from '@/lib/api'
import { EventDetail } from './EventDetail'

export const metadata = {
    title: 'KEAI | Evento',
}

const MisEventos = async ({ params }) => {
    const event = await api.getEvent(params.evento)

    return (
        <>
            <main className="w-full grow relative flex flex-col">
                <EventDetail event={event} />
            </main>
        </>
    )
}

export default MisEventos
