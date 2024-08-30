import { getEvent } from '@/api/getEvent'
import { EventDetail } from './EventDetail'

export const metadata = {
    title: 'KEAI | Evento',
}

const EditarEvento = async ({ params }) => {
    const { data } = await getEvent(params.evento)

    return (
        <>
            <main className="w-full grow relative flex flex-col">
                <section className="py-12">
                    <h1 className="text-h1">Editar Evento</h1>
                </section>
                <EventDetail event={data} />
            </main>
        </>
    )
}

export default EditarEvento
