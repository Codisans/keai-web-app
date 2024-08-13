import { UserDetail } from './UserDetail'

export const metadata = {
    title: 'KEAI | Perfil',
}

const Profile = () => {
    return (
        <>
            <div className="py-12 flex flex-col gap-8 max-w-7xl mx-auto">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        Bienvenido!
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200">
                        <UserDetail />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
