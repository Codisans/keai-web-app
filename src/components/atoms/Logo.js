export const Logo = ({ className = 'text-logo' }) => {
    return (
        <span
            className={`${className} font-primary font-bold select-none bg-primary text-accent hover:text-secondary py-[0.2em] px-[0.1em] uppercase rounded-lg text-white`}>
            KEAI
        </span>
    )
}
