import Header from '@/app/Header'
import Link from 'next/link'

export const metadata = {
    title: 'Laravel - Dashboard',
}

async function getEvent(id) {
    const res = await fetch('http://localhost:8000/api/events')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const Event = async ({ params }) => {
    const data = await getEvent(params.slug)

    return (
        <>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Event id: ${data}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Event
