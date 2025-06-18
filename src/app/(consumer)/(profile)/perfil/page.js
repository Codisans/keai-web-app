import { UpcomingEvents } from './UpcomingEvents'

export const metadata = {
    title: 'keai | Perfil',
}

const Profile = () => {
    return (
        <section className="container">
            <h2 className="pt-8 pb-4 typo-regular text-lg">
                Tus proximos eventos:
            </h2>
            <UpcomingEvents />
        </section>
    )
}

export default Profile
