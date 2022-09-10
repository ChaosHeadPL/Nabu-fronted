import React from 'react'
import { Input, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'


const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
    return (
        <Box
            sx={{
                display: 'felx',
                alignItems: 'center'
            }}
        >
            <SearchIcon sx={{ marginRight: '10px' }} />
            <Input
                placeholder={placeholder}
                onChange={onChange}
                sx={{
                    width: searchBarWidth,
                    color: 'rgba(0, 0, 0, 0.6)',
                    fontSize: '1.1erm',
                }}
                disableUnderLine
            />
        </Box>
    )
}

export default SearchBar