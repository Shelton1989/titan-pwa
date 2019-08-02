import React from 'react';

import { 
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
    CircularProgress,
    Button
} from '@material-ui/core'

const FeedBackModal = (props) => {
    const {onClose, handleClose, message, title, loading, open, errorTitle, error, handleDelete} = props
    return (
        <div>
            <Dialog 
                open={open}
                onClose={onClose}
                aria-labelledby="alert-title"
                aria-describedby="alert-description"
            >
                <DialogTitle id="alert-title">
                    {error?errorTitle:title}
                </DialogTitle>
                {loading?
                <div className="modal-loader">
                    <CircularProgress className="spinner" />
                </div>
                :(
                <DialogContent>
                    <DialogContentText id="alert-description">
                        {error?error:message}
                    </DialogContentText>
                </DialogContent>)}
                <DialogActions>
                    {handleDelete?(<Button onClick={handleDelete} disabled={loading}>
                        DELETE
                    </Button>):null}
                    <Button onClick={handleClose}>
                        {handleDelete?'CANCEL':'CLOSE'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FeedBackModal;