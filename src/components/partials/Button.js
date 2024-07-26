export const Button = ({ type = 'submit', className = '', ...props }) => (
    <button
        type={type}
        className={`${className} block text-button font-primary uppercase bg-white border-2 font-bold px-3 py-1 rounded text-black`}
        {...props}
    />
)
