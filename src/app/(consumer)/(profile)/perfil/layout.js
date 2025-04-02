import { UserDetail } from './UserDetail'
import { SavedTags } from './SavedTags'

const FavouritesLayout = ({ children }) => {
    return (
        <>
            <h1 className="sr-only">Perfil</h1>
            <UserDetail />
            <SavedTags />
            {children}
        </>
    )
}

export default FavouritesLayout
