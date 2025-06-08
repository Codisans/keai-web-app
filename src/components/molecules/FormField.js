'use client'

export const FormField = ({
    className = '',
    type = 'text',
    label,
    name,
    value,
    onChange,
    error,
    options,
    ...props
}) => {
    return (
        <div
            className={`flex flex-col gap-1 ${error ? 'error' : ''} ${className}`}>
            <label className="typo-body text-xs" htmlFor={name}>
                {label}
            </label>
            <FormInput
                id={name}
                value={value}
                onChange={onChange}
                type={type}
                options={options}
                {...props}
            />
        </div>
    )
}

export const FormInput = ({
    className = '',
    type = 'text',
    label,
    name,
    value,
    onChange,
    error,
    options,
    ...props
}) => {
    switch (type) {
        case 'select':
            return (
                <select
                    className="w-full form-select"
                    id={name}
                    value={value}
                    onChange={onChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            )
        default:
            return (
                <input
                    className="w-full form-input"
                    id={name}
                    value={value}
                    onChange={onChange}
                    type={type}
                    {...props}
                />
            )
    }
}
