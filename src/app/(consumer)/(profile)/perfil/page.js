import { getEvents } from '@/api/getEvents'
import { SavedEvents } from './SavedEvents'

export const metadata = {
    title: 'KEAI | Perfil',
}

const Profile = async () => {
    const events = await getEvents()

    return (
        <>
            <section className="flex flex-col p-gg grow overflow-y-auto">
                <SavedEvents events={events.data} />
            </section>
        </>
    )
}

export default Profile
