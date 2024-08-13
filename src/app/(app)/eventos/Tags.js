'use client'

import Tag from './Tag'

const Tags = props => {
    const { data } = props

    // return <button onClick={() => console.log(data)}>Log tags</button>
    return (
        <ul className="my-6 bg-white shadow p-6 flex flex-wrap justify-center gap-4">
            {data?.map((tag, i) => {
                return (
                    <li key={i}>
                        <Tag data={tag} />
                    </li>
                )
            })}
        </ul>
    )
}

export default Tags
