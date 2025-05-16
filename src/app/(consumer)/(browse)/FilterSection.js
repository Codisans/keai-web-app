export const FilterSection = ({ children, legend, indicator }) => {
    return (
        <fieldset className="block mt-8">
            <div className="flex items-end w-full gap-2 pb-2">
                {legend && (
                    <legend className="text-black typo-caps text-xs font-bold">
                        {legend}
                    </legend>
                )}
                {indicator}
            </div>
            {children}
        </fieldset>
    )
}
