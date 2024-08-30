import { getEvent } from '@/api/getEvent'
import { EventDetail } from './EventDetail'

export const metadata = {
    title: 'KEAI | Evento',
}

const Eventos = async ({ params }) => {
    const { data } = await getEvent(params.evento)

    return (
        <>
            <main className="w-full grow relative flex flex-col">
                <EventDetail event={data} />
            </main>
        </>
    )
}

export default Event
