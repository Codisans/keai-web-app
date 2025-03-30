'use client'

import { useAuth } from '@/hooks/auth'
import moment from 'moment'

export const AccountDetail = () => {
    const { user } = useAuth()

    return (
        user && (
            <div className="flex flex-col gap-y-2 text-large">
                <DetailRow label="Name" value={user.name} />
                <DetailRow label="User email" value={user.email} />
                <DetailRow label="User ID" value={user.id} />
                <DetailRow
                    label="Account type"
                    value={user.roles.flatMap(role => role.name).join(', ')}
                />
                <DetailRow
                    label="Joined"
                    value={moment(user.created_at).format('DD-MM-YYYY')}
                />
                <DetailRow
                    label="Last updated"
                    value={moment(user.updated_at).format('DD-MM-YYYY')}
                />
            </div>
        )
    )
}

export const DetailRow = ({ label, value }) => {
    return (
        <div className="grid grid-cols-3 gap-x-2 gap-y-4 items-end typo-h5">
            <span className="col-span-1 text-right typo-caps pb-1">
                {label}:
            </span>
            <span className="col-span-2">{value}</span>
        </div>
    )
}
