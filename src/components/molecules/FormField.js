'use client'

export const FormField = ({
    className = '',
    type = 'text',
    label,
    name,
    value,
    onChange,
    error,
    ...props
}) => {
    return (
        <div
            className={`flex flex-col gap-1 ${error ? 'error' : ''} ${className}`}>
            <label className="typo-body text-xs" htmlFor={name}>
                {label}
            </label>
            <input
                className="w-full form-input"
                id={name}
                value={value}
                onChange={onChange}
                type={type}
                {...props}
            />
        </div>
    )
}
