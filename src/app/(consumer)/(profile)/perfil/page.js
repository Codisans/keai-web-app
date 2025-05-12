import { EventTabs } from './EventTabs'
import { UpcomingEvents } from './UpcomingEvents'

export const metadata = {
    title: 'KEAI | Perfil',
}

const Profile = () => {
    return (
        <>
            <section className="sticky px-gutter z-20 w-full bg-white-off border-b border-black/20 top-14">
                <h2 className="pt-8 pb-4 typo-h3">Tus proximos eventos</h2>
                <EventTabs />
            </section>
            <section className="px-gutter flex flex-col grow overflow-y-auto">
                <UpcomingEvents />
            </section>
        </>
    )
}

export default Profile
