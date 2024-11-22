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
                className="block w-full text-center text-radio peer-checked:bg-primary peer-checked:border-primary border-grey border bg-white py-2.5 px-2 rounded-button"
                htmlFor={id}>
                {label}
            </label>
        </div>
    )
}
