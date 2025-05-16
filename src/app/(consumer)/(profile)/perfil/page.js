import { UpcomingEvents } from './UpcomingEvents'

export const metadata = {
    title: 'KEAI | Perfil',
}

const Profile = () => {
    return (
        <section className="container">
            <h2 className="pt-8 pb-4 typo-h3">Tus proximos eventos</h2>
            <UpcomingEvents />
        </section>
    )
}

export default Profile
