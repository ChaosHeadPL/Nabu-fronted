import React from 'react'
import { Avatar, IconButton, Typography, Tooltip, Box } from '@mui/material';
import Help from '@mui/icons-material/Help'
import NotificationBell from '../../components/common/NotificationBell/NotificationBell';
import CommonButton from '../common/CommonButton/CommonButton';


const Header = ({ title }) => {
    const headerStyles = {
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009EA9',
            padding: '20px',
            boxShadow: 'rgba(50, 50, 93, 0.7) 0px 10px 10px -12px inset, rgba(0, 0, 0, 0.8) 0px 10px 16px -18px inset',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                marginRight: '5px',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginLeft: '240px',
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
        },
    };

    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography
                    sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <NotificationBell
                    iconColor="white"
                />
                <Avatar src="https://yt3.ggpht.com/yti/AJo0G0kgYU7l9ewOBbVJrTZ4vbKVGL1IcI_NySveZvlgyQ=s108-c-k-c0x00ffffff-no-rj" />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                    sx={{textShadow: '2px 1px 2px rgba(0,0,0,0.7), -2px -1px 4px rgba(255,255,255,0.15)',}}
                >
                    {title}
                </Typography>
                <Box>
                    <CommonButton
                        sx={headerStyles.webButton}
                        variant="outlined"
                    >
                        Web setup
                    </CommonButton>
                    <Tooltip
                        title="Help"
                    >
                        <IconButton
                            color="white"
                            sx={headerStyles.helpIcon}
                        >
                            <Help color='white' />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default Header