'use client'
import { useRouter } from 'next/navigation'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Button } from '@/components/atoms/Button'
import { useState, useContext, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { useAuth } from '@/hooks/auth'

export const EventHeader = () => {
    const [isFavorite, setIsFavorite] = useState(false)
    const router = useRouter()
    const { selectedEvent } = useContext(ConsumerContext)
    const { favoriteEvent, user, getFavoriteEvents } = useAuth()

    useEffect(() => {
        const fetchFavorites = async () => {
            if (selectedEvent && user) {
                const favorites = await getFavoriteEvents()
                setIsFavorite(
                    favorites.some(fav => fav.id === selectedEvent.id),
                )
            } else {
                setIsFavorite(false)
            }
        }

        fetchFavorites()
    }, [selectedEvent, user, getFavoriteEvents])

    const handleFavorite = async () => {
        if (!selectedEvent || !user) return
        try {
            await favoriteEvent(selectedEvent.id)
            setIsFavorite(prevState => !prevState)
        } catch (error) {
            console.error('Error favoriting event:', error)
        }
    }

    return (
        <header className="sticky inset-x-0 top-0 bg-white shadow z-header shrink">
            <nav className="w-full p-gg">
                <ul className="grid w-full grid-cols-5 gap-gg">
                    <li className="col-span-1">
                        <Button
                            className="w-full"
                            href="/eventos"
                            icon={<HomeIcon />}
                        />
                    </li>
                    <li className="col-span-2">
                        <Button onClick={() => router.back()}>Go back</Button>
                    </li>
                    <li className="col-start-5 col-end-6">
                        <Button
                            onClick={handleFavorite}
                            active={isFavorite}
                            className="w-full"
                            icon={
                                isFavorite ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )
                            }
                            disabled={!selectedEvent || !user}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
