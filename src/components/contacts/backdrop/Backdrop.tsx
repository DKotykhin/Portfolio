import * as React from 'react';

import { Backdrop, CircularProgress } from '@mui/material';

interface IBackdrop {
    open: boolean,
    handleClose: () => void,
}

const SimpleBackdrop: React.FC<IBackdrop> = ({ open, handleClose }) => {

    return (
        <Backdrop
            sx={{ color: '#dc965a', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
        >
            <CircularProgress color="inherit" size={80} thickness={3}/>
        </Backdrop>
    );
};

export default SimpleBackdrop;