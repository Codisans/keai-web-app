function Tag({ data }) {
    return (
        <button
            className="px-4 py-1.5 bg-black text-white rounded"
            onClick={() => console.log(data)}>
            {data.name}
        </button>
    )
}

export default Tag
