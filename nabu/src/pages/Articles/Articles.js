import React, { useState } from 'react'
import axios from 'axios';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import UserTable from '../../components/common/UserTable/UserTable';
import BasicCard from '../../components/common/BasicCard/BasicCard'
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar'
import { Typography, Box } from '@mui/material';


export const cardHeaderStyles = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        paddingRight: '20px',
        height: '65px',
        backgroundColor: '#f2f2f2',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    addUserButton: {
        fontSize: '1.05rem',
    },

};

const Articles = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const getHeader = () => {
        return (    
            <Box sx={cardHeaderStyles.wrapper}>
                <Typography variant="h5">Users</Typography>
            </Box>
        )
    }

    return (
        <GridWrapper>
            <BasicCard
                header={getHeader()}
                content={<UserTable onError={() => setOpen(true)} />}
            />
            <BasicSnackbar
                open={open}
                severity="error"
                message="Data couldn't be fetched"
                onClose={handleClose}
            />
        </GridWrapper>
    )
}

export default Articles