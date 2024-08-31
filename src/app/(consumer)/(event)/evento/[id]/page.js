import { getEvent } from '@/api/getEvent'
import { EventDetail } from './EventDetail'
import { EventFooter } from '../../EventFooter'
import { EventHeader } from '../../EventHeader'

export const metadata = {
    title: 'KEAI | Evento',
}

const Event = async ({ params }) => {
    const { data } = await getEvent(params.id)

    return (
        <>
            <EventHeader event={data} />
            {/* <MainMenu /> */}
            <main className="w-full grow relative flex flex-col">
                <EventDetail event={data} />
            </main>
            <EventFooter event={data} />
        </>
    )
}

export default Event
