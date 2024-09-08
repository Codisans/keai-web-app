'use client'

import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'
import HistoryIcon from '@mui/icons-material/History'
import EventIcon from '@mui/icons-material/Event'
import { Loading } from '@/app/Loading'

const FavouritesLayout = ({ children }) => {
    const { user } = useAuth()

    if (!user) {
        return <Loading />
    }

    return (
        <div className="flex flex-col w-full">
            <h1 className="sr-only">Perfil</h1>
            <section className="grid grid-cols-12 p-gg gap-gg">
                <div className="col-span-4">
                    <div className="w-full pt-[100%] relative rounded-full overflow-hidden">
                        <div className="bg-grey absolute inset-0 w-full h-full"></div>
                    </div>
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                    <h2 className="text-h2 font-tenerite">{user?.name}</h2>
                    <span>{}</span>
                </div>
            </section>
            <h1 className="p-gg text-h1">Eventos guardados</h1>
            <section className="w-full p-gg bg-white z-10 border-b border-grey-2 sticky top-14">
                <ul className="w-full grid grid-cols-2 gap-gg pt-gg">
                    <li className="col-span-1">
                        <Button
                            className="flex gap-2 w-full active:bg-grey-3 active:text-black"
                            href="/perfil/historicos">
                            <HistoryIcon />
                            <span>Historicos</span>
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button
                            className="w-full flex gap-2 active:bg-grey-3 active:text-black"
                            href="/perfil">
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
