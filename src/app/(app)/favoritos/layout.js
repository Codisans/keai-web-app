import { Button } from '@/components/atoms/Button'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import HistoryIcon from '@mui/icons-material/History'
import EventIcon from '@mui/icons-material/Event'

const FavouritesLayout = ({ children }) => {
    return (
        <div className="flex flex-col w-full">
            <section className="sticky top-0 w-full inset-x-0 p-gutter bg-white z-10 border-b border-grey-2">
                <ul className="w-full grid grid-cols-5 gap-gutter">
                    <li className="col-start-1 col-end-4">
                        <h1 className="text-h1">Favoritos</h1>
                    </li>
                    <li className="col-start-4 col-end-5">
                        <Button
                            className="w-full"
                            href="/cuenta"
                            icon={<SettingsIcon />}
                        />
                    </li>
                    <li className="col-start-5 col-end-6">
                        <Button
                            className="w-full"
                            href="/perfil"
                            icon={<PersonIcon />}
                        />
                    </li>
                </ul>
                <ul className="w-full grid grid-cols-2 gap-gutter pt-gutter">
                    <li className="col-span-1">
                        <Button
                            className="flex gap-2 w-full active:bg-grey-3 active:text-black"
                            href="/favoritos/historicos">
                            <HistoryIcon />
                            <span>Historicos</span>
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button
                            className="w-full flex gap-2 active:bg-grey-3 active:text-black"
                            href="/favoritos">
                            <EventIcon />
                            <span>Siguentes</span>
                        </Button>
                    </li>
                </ul>
            </section>
            {children}
        </div>
    )
}

export default FavouritesLayout
