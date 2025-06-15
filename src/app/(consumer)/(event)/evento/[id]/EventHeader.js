import Link from 'next/link'
import { SaveEventButton } from '@/components/atoms/SaveEventButton'
import { BackButton } from '@/components/atoms/BackButton'
import { Symbol } from '@/components/atoms/Symbol'

export const EventHeader = ({ eventId }) => {
    return (
        <header className="sticky inset-x-0 top-0 bg-white border-b border-grey z-header h-14">
            <nav className="container py-2">
                <ul className="grid w-full grid-cols-5 gap-2">
                    <li className="col-span-1">
                        <BackButton className="button-icon w-full">
                            <Symbol className="w-6 h-6" name="back-arrow" />
                        </BackButton>
                    </li>
                    <li className="col-span-1">
                        <Link className="button-icon w-full" href="/eventos">
                            <Symbol className="w-6 h-6" name="home-icon" />
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
