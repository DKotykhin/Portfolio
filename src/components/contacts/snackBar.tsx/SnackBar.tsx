import * as React from 'react';

import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ISnackBar {
    open: boolean;
    error: boolean;
    handleClose: (arg0: React.SyntheticEvent | Event) => void;
};

const SnackBar: React.FC<ISnackBar> = ({ open, handleClose, error }) => {

    const severity = error ? 'error' : 'success';
    const message = error ? 'Something goes wrong' : 'Your message successfully sent'

    const action = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <CloseIcon fontSize="small" />
        </IconButton>
    );

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            action={action}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default SnackBar;