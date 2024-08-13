'use client'

import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function SearchInput({
    options = [
        { label: 'Artes', id: 1 },
        { label: 'Deportes', id: 2 },
        { label: 'Electronica', id: 3 },
        { label: 'Gastronomia', id: 4 },
    ],
}) {
    return (
        <Autocomplete
            disablePortal
            freeSolo
            id="search"
            options={options}
            sx={{ width: '100%' }}
            renderInput={params => (
                <TextField {...params} label="Buscar eventos..." />
                // <div ref={params.InputProps.ref}>
                //     <input
                //         className="px-3 py-1.5"
                //         {...params.inputProps}
                //         placeholder="Buscar eventos..."
                //         type="text"
                //     />
                // </div>
            )}
        />
    )
}
