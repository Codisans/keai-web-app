'use client'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function TagsAutocomplete({
    tags,
    selectedTags,
    setSelectedTags,
}) {
    return (
        <Autocomplete
            multiple
            options={tags}
            getOptionLabel={tag => tag.name}
            filterSelectedOptions
            value={selectedTags}
            onChange={(event, newValue) => {
                console.log(event)
                setSelectedTags(newValue)
            }}
            renderInput={params => (
                <TextField
                    {...params}
                    label="Filtrar tags"
                    placeholder="Seleccionar"
                />
            )}
        />
    )
}
