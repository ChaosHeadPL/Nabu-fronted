import React from 'react'
import { Box, Typography, Modal } from '@mui/material'
import { modalStyle } from './styles'
import CommonButton from '../CommonButton/CommonButton'


const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Box sx={modalStyle.wrapper}>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    {title}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                {content}
                <Box sx={modalStyle.buttons}>
                    <CommonButton
                        cariant='contained'
                        onClick={onSubmit}
                    >
                        Submit
                    </CommonButton>
                    <CommonButton onClick={onClose}>Cancel</CommonButton>
                </Box>
            </Box>
        </Modal>
    )
}

export default BasicModal