export const RadioButton = ({ id = '', name = '', label, ...props }) => {
    return (
        <>
            <label htmlFor={name} {...props}>
                <input
                    id={id}
                    name={name}
                    className="h-0 w-0 invisible peer/radio"
                    type="radio"
                />
                <span className="text-nowrap bg-grey-light text-black px-1.5 py-1 rounded peer-checked/radio:bg-black peer-checked/radio:text-white">
                    {label}
                </span>
            </label>
        </>
    )
}
