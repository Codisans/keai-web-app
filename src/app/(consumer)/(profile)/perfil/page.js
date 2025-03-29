import { UpcomingEvents } from './UpcomingEvents'

export const metadata = {
    title: 'KEAI | Perfil',
}

const Profile = () => {
    return (
        <>
            <section className="flex flex-col p-grid-gap grow overflow-y-auto">
                <UpcomingEvents />
            </section>
        </>
    )
}

export default Profile
