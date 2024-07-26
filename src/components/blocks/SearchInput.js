'use client'

import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function SearchInput({
    options = [
        { label: 'Test 1', id: 1 },
        { label: 'Test 2', id: 2 },
    ],
}) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 300 }}
            renderInput={params => (
                <TextField {...params} label="Keyword search" />
            )}
        />
    )
}
