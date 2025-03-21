'use client'
import { useRouter } from 'next/navigation'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Button } from '@/components/atoms/Button'
import { useState, useContext, useEffect } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import { ConsumerContext } from '@/app/(consumer)/ConsumerContext'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

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
            <nav className="w-full p-grid-gap">
                <ul className="grid w-full grid-cols-5 gap-grid">
                    <li className="col-span-1">
                        <Button
                            className="w-full dark"
                            onClick={() => router.back()}
                            icon={
                                <svg
                                    className="w-8 h-8 -m-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                                    />
                                </svg>
                            }
                        />
                    </li>
                    <li className="col-span-1">
                        <Link className="button-icon w-full" href="/eventos">
                            <HomeIcon />
                        </Link>
                    </li>
                    <li className="col-start-5 col-end-6">
                        <button
                            onClick={handleFavorite}
                            className={`button w-full ${isFavorite ? 'current' : ''}`}
                            disabled={!selectedEvent || !user}
                            type="button">
                            {isFavorite ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
