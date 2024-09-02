import { getEvents } from '@/api/getEvents'
import { Loading } from '@/app/Loading'
import { UserRow } from './UserRow'

export const metadata = {
    title: 'KEAI Admin | Events',
}

const AdminUsers = async () => {
    const { events } = await getEvents()

    // if (!events) return <Loading />

    return (
        <div className="w-full">
            <h1>Users:</h1>
            <ul className="flex flex-col">
                {events?.map((event, i) => (
                    <UserRow key={i} event={event} />
                ))}
            </ul>
        </div>
    )
}

export default AdminUsers
