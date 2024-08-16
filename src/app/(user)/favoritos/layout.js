import { Button } from '@/components/atoms/Button'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import HistoryIcon from '@mui/icons-material/History'
import EventIcon from '@mui/icons-material/Event'

const FavouritesLayout = ({ children }) => {
    return (
        <div className="flex flex-col w-full">
            <h1 className="p-gutter text-h1">Favoritos</h1>
            <section className="w-full p-gutter bg-white z-10 border-b border-grey-2 sticky top-14">
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
