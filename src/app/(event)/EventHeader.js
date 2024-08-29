'use client'
import { useRouter } from 'next/navigation'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Button } from '@/components/atoms/Button'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'

export const EventHeader = () => {
    const [fav, setFav] = useState(false)
    const router = useRouter()

    return (
        <header className="sticky top-0 inset-x-0 shadow z-header bg-white shrink">
            <nav className="w-full p-gutter">
                <ul className="w-full grid grid-cols-5 gap-gutter">
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
                            onClick={() => setFav(s => !s)}
                            active={fav}
                            className="w-full"
                            icon={
                                fav ? <FavoriteIcon /> : <FavoriteBorderIcon />
                            }
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
