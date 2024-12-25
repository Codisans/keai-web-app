import { TestBlock } from '@/components/atoms/TestBlock'
import { SavedEvents } from './SavedEvents'
import api from '@/lib/api'

export const metadata = {
    title: 'KEAI | Perfil',
}

const Profile = async () => {
    const events = await api.getEvents()

    return (
        <>
            <section className="flex flex-col p-gg grow overflow-y-auto">
                <TestBlock data={events} />
                <SavedEvents events={events} />
            </section>
        </>
    )
}

export default Profile
