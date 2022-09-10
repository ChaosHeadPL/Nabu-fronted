import React, { useState } from 'react'
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';
import CommonButton from '../../components/common/CommonButton/CommonButton';


const Home = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <GridWrapper>
            This is snackbar page
            <CommonButton
                variant="contained"
                onClick={handleClick}
            >
                Open success snackbar
            </CommonButton>
            <BasicSnackbar
                open={open}
                onClose={handleClose}
                severity='error'
                message='Some example message'
            />
        </GridWrapper>
    )
}

export default Home