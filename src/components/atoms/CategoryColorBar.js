export const CategoryColorBar = ({ categories }) => {
    if (!categories || categories.length === 0) return null
    return (
        <div className="w-full h-1 flex flex-row flex-nowrap">
            {categories.map((category, i) => {
                return (
                    <div
                        key={i}
                        className={`h-1 grow inline-flex bg-theme theme--${category.slug}`}
                    />
                )
            })}
        </div>
    )
}
