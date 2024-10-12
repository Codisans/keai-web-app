import api from '@/lib/api'

const Event = async ({ params }) => {
    const data = await api.getEvent(params.slug)

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
