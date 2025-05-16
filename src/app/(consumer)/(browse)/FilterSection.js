export const FilterSection = ({ children, legend, indicator }) => {
    return (
        <fieldset className="block first:border-t-0 border-t border-gray-300 py-6 first:mt-0">
            <div className="flex items-end w-full gap-2 pb-2">
                {legend && (
                    <legend className="text-black text-caps uppercase">
                        {legend}
                    </legend>
                )}
                {indicator}
            </div>
            {children}
        </fieldset>
    )
}
