'use client'

// import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import { Button } from '@/components/atoms/Button'
import HistoryIcon from '@mui/icons-material/History'
import EventIcon from '@mui/icons-material/Event'
import { Loading } from '@/app/Loading'
import { TestBlock } from '@/components/atoms/TestBlock'

const FavouritesLayout = ({ children }) => {
    const { user } = useAuth()
    // const [favoriteEvents, setFavoriteEvents] = useState([])

    // useEffect(() => {
    //     const fetchFavoriteEvents = async () => {
    //         try {
    //             const events = await getFavoriteEvents()
    //             setFavoriteEvents(events)
    //         } catch (error) {
    //             console.error('Error fetching favorite events:', error)
    //         }
    //     }

    //     fetchFavoriteEvents()
    // }, [])

    if (!user) return <Loading />

    return (
        <>
            <TestBlock data={user} />
            <h1 className="sr-only">Perfil</h1>
            <section className="grid grid-cols-12 p-gg gap-gg">
                <div className="col-span-4">
                    <div className="w-full pt-[100%] relative rounded-full overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-grey"></div>
                    </div>
                </div>
                <div className="flex flex-col justify-center col-span-8">
                    <h2 className="text-h2 font-tenerite">{user?.name}</h2>
                    <span>{}</span>
                </div>
            </section>
            {/*
             <h1 className="p-gg text-h1">
                Eventos guardados ({favoriteEvents.length})
            </h1> */}
            <h1 className="p-gg text-h1">Eventos guardados</h1>
            <section className="sticky z-10 w-full bg-white border-b p-gg border-grey-2 top-14">
                <ul className="grid w-full grid-cols-2 gap-gg pt-gg">
                    <li className="col-span-1">
                        <Button
                            className="flex w-full gap-2 active:bg-grey-3 active:text-black"
                            href="/perfil/historicos">
                            <HistoryIcon />
                            <span>Historicos</span>
                        </Button>
                    </li>
                    <li className="col-span-1">
                        <Button
                            className="flex w-full gap-2 active:bg-grey-3 active:text-black"
                            href="/perfil">
                            <EventIcon />
                            <span>Siguentes</span>
                        </Button>
                    </li>
                </ul>
            </section>
            {children}
        </>
    )
}

export default FavouritesLayout
