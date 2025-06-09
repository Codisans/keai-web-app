'use client'

import { useAuth } from '@/hooks/auth'
import moment from 'moment'

export const AccountDetail = () => {
    const { user } = useAuth()

    return (
        user && (
            <div className="flex flex-col gap-y-2 text-lg">
                <DetailRow label="User ID" value={user.id} />
                <DetailRow label="Name" value={user.name} />
                <DetailRow label="User email" value={user.email} />
                <DetailRow label="Género" value={user.gender} />
                <DetailRow
                    label="Fecha de nacimiento"
                    value={moment(user.dob).format('DD-MM-YYYY')}
                />
                <DetailRow
                    label="Account type"
                    value={user.roles.flatMap(role => role.name).join(', ')}
                />
                <DetailRow
                    label="Usuario creado"
                    value={moment(user.created_at).format('DD-MM-YYYY')}
                />
                <DetailRow
                    label="Última actualización"
                    value={moment(user.updated_at).format('DD-MM-YYYY')}
                />
            </div>
        )
    )
}

export const DetailRow = ({ label, value }) => {
    return (
        <div className="grid grid-cols-3 gap-x-2 gap-y-6 items-end text-lg typo-regular">
            <span className="col-span-1 text-right typo-caps text-xs">
                {label}:
            </span>
            <span className="col-span-2">{value}</span>
        </div>
    )
}
