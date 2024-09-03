import { getEvents } from '@/api/getEvents'
import Link from 'next/link'
import { Price } from '@/components/atoms/Price'
import { DateTime } from '@/components/atoms/DateTime'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Button } from '@/components/atoms/Button'

export const metadata = {
    title: 'KEAI | Mis Eventos',
}

const MisEventos = async () => {
    const events = await getEvents()

    return (
        <>
            <section className="py-12 px-gutter">
                <h1 className="text-h1">Mis Eventos</h1>
            </section>
            <section className="flex flex-col overflow-y-auto p-gutter grow">
                <ul className="flex flex-col w-full">
                    {events.data?.map((event, i) => (
                        <li
                            className="w-full border-t border-grey-2 py-gutter"
                            key={i}>
                            <div className="relative grid w-full grid-cols-12 gap-gutter group/card">
                                <div className="relative col-start-1 col-end-4 overflow-hidden aspect-square rounded-card">
                                    <img
                                        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                                        src={event.cover}
                                    />
                                </div>
                                <div className="flex flex-row col-start-4 col-end-13">
                                    <div className="flex flex-col justify-between grow">
                                        <h3 className="pb-2 text-h3">
                                            {event.name}
                                        </h3>
                                        <span className="pb-2 tracking-wide uppercase text-grey-4 text-caps">
                                            {event.province}
                                        </span>
                                        <DateTime date={event.start_date} />
                                        <DateTime
                                            date={event.start_date}
                                            type="time"
                                        />
                                    </div>
                                    <div className="flex flex-col items-end justify-between gap-gutter">
                                        <Price
                                            className="font-small text-grey-4"
                                            value={event.price}
                                        />
                                        <div className="flex flex-nowrap gap-gutter">
                                            <Button icon={<VisibilityIcon />} />
                                            <Button
                                                icon={<VisibilityOffIcon />}
                                            />
                                            <Button
                                                href={`/mis-eventos/${event.id}/editar`}
                                                icon={<EditIcon />}
                                            />
                                            <Button icon={<DeleteIcon />} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default MisEventos
