'use client'

export const PriceRadio = ({ priceValue, setPriceValue }) => {
    const options = [
        {
            id: 'all',
            label: 'Todos',
            value: [null, null],
        },
        {
            id: 'free',
            label: 'Gratis',
            value: [null, 0],
        },
        {
            id: 'paid',
            label: 'Pagado',
            value: [1, null],
        },
    ]

    return (
        <div className="grid grid-cols-3 gap-2">
            {options.map((option, index) => (
                <div key={index} className="col-span-1">
                    <input
                        id={`price-${index}`}
                        name="price-radio"
                        value={option.value}
                        className="peer hidden"
                        checked={
                            priceValue[0] === option.value[0] &&
                            priceValue[1] === option.value[1]
                        }
                        type="radio"
                        onChange={() => {
                            setPriceValue(option.value)
                        }}
                    />
                    <label
                        className="button-radio peer-checked:bg-primary peer-checked:hover:bg-primary/80 peer-checked:border-primary"
                        htmlFor={`price-${index}`}>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    )
}
