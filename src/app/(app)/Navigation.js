import Link from 'next/link'

const Navigation = ({ user }) => {
    return (
        <nav className="h-nav flex-none z-50 bg-white relative flex items-center">
            <ul className=" flex w-full items-center gap-6 px-6">
                <li className="grow">
                    <Link
                        className="py-1.5 w-full items-center justify-center bg-gray-100 flex rounded"
                        href="/events/browse">
                        List
                    </Link>
                </li>
                <li className="grow">
                    <Link
                        className="py-1.5 w-full items-center justify-center bg-gray-100 flex rounded"
                        href="/events/map">
                        Map
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
