'use client'

import { useAuth } from '@/hooks/auth'
import moment from 'moment'

export const AccountDetail = () => {
    const { user } = useAuth()

    return (
        user && (
            <div className="flex flex-col text-lg rounded-2xl border border-grey overflow-hidden">
                <DetailRow label="Usuario" value={user.id} />
                <DetailRow label="Nombre" value={user.name} />
                <DetailRow label="Email" value={user.email} />
                {/* <DetailRow label="Género" value={user.gender} /> */}
                <DetailRow
                    label="Nacimiento"
                    value={moment(user.date_of_birth).format('DD-MM-YYYY')}
                />
                {/* <DetailRow
                    label="Account type"
                    value={JSON.stringify(user.roles)}
                /> */}
                <DetailRow
                    label="Creado"
                    value={moment(user.created_at).format('DD-MM-YYYY')}
                />
                <DetailRow
                    label="Actualizado"
                    value={moment(user.updated_at).format('DD-MM-YYYY')}
                />
            </div>
        )
    )
}

export const DetailRow = ({ label, value }) => {
    return (
        <div className="grid border-t border-grey first:border-t-0 grid-cols-12 gap-x-2 ">
            <span className="col-span-5 bg-white typo-caps text-xs border-grey border-r p-2 flex justify-end text-right items-center">
                {label}
            </span>
            <span className="col-span-7 p-2 text-sm typo-regular flex items-center">
                {value}
            </span>
        </div>
    )
}
