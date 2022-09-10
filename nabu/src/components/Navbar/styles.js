export const navbarStyles = {
    drawer: {
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#0A3E49',
            color: '#88D2CD',
            textShadow: '2px 1px 2px rgba(0,0,0,1), -2px -1px 4px rgba(255,255,255,0.15)',
        },
        '& .Mui-selected': {
            color: 'red',
        },
        '& .MuiListItemButton-root:hover': {
            backgroundColor: '#08353F',
            boxShadow: 'rgba(50, 50, 93, 0.7) 0px 10px 10px -12px inset, rgba(0, 0, 0, 0.8) 0px 10px 16px -18px inset',
        },
    },
    icons: {
        marginLeft: '20px',
        color: '#88D2CD',
    },
    text: {
        '& span': {
            marginLeft: '-20px',
            fontWeight: '600',
            fontSize: '16px',
            
        }
    }
};