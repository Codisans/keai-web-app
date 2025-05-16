import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'
import { SaveEventButton } from '@/components/atoms/SaveEventButton'
import { BackButton } from '@/components/atoms/BackButton'

export const EventHeader = ({ eventId }) => {
    return (
        <header className="sticky inset-x-0 top-0 bg-white shadow z-header h-14">
            <nav className="container py-2">
                <ul className="grid w-full grid-cols-5 gap-2">
                    <li className="col-span-1">
                        <BackButton className="button-icon w-full">
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
                        </BackButton>
                    </li>
                    <li className="col-span-1">
                        <Link className="button-icon w-full" href="/eventos">
                            <HomeIcon />
                        </Link>
                    </li>
                    <li className="col-start-5 col-end-6">
                        <SaveEventButton
                            className="button-icon w-full text-gray-300 selected:text-black selected:border-gray-300 selected:bg-white-true"
                            eventId={eventId}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
