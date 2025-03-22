export const DateRadio = ({ id, name, value, checked, onChange, label }) => {
    return (
        <div className="grow">
            <input
                id={id}
                name={name}
                value={value}
                className="peer hidden"
                checked={checked}
                type="radio"
                onChange={onChange}
            />
            <label
                className="block w-full text-center typo-caps peer-checked:bg-primary peer-checked:border-primary border-grey border bg-white py-2 px-1 rounded"
                htmlFor={id}>
                {label}
            </label>
        </div>
    )
}
