import React from 'react'
import { Grid } from '@mui/material'
import { gridWrapperSyles } from './styles'


const GridWrapper = ({children}) => {
    return (
        <Grid
            item
            xs={12}
            sx={gridWrapperSyles}
        >
            {children}
        </Grid>
    )
}

export default GridWrapper