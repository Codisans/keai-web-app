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
            <section className="px-gutter py-12">
                <h1 className="text-h1">Mis Eventos</h1>
            </section>
            <section className="flex flex-col p-gutter grow overflow-y-auto">
                <ul className="w-full flex flex-col">
                    {events.data?.map((event, i) => (
                        <li
                            className="w-full border-t border-grey-2 py-gutter"
                            key={i}>
                            <div className="grid grid-cols-12 gap-gutter relative group/card w-full">
                                <div className="col-start-1 col-end-4 aspect-square relative rounded-card overflow-hidden">
                                    <img
                                        className="absolute inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform ease-in-out duration-500"
                                        src={event.cover}
                                    />
                                </div>
                                <div className="col-start-4 col-end-13 flex flex-row">
                                    <div className="grow flex flex-col justify-between">
                                        <h3 className="text-h3 pb-2">
                                            {event.name}
                                        </h3>
                                        <span className="pb-2 text-grey-4 uppercase text-caps tracking-wide">
                                            {event.province}
                                        </span>
                                        <DateTime date={event.start_date} />
                                        <DateTime
                                            date={event.start_date}
                                            type="time"
                                        />
                                    </div>
                                    <div className="flex flex-col items-end gap-gutter justify-between">
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
                )
            </section>
        </>
    )
}

export default MisEventos
