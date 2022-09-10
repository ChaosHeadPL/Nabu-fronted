import React from 'react'
import { Card, CardContent } from '@mui/material'
import { cardStyles } from './styles'


const BasicCard = ({ header, content }) => {
    return (
        <Card sx={cardStyles.body}>
            {header}
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}

export default BasicCard