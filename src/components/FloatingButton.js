import React, { Component } from 'react';

import {
    AddIcon
} from '@material-ui/icons/Add';
import {
    Fab
} from '@material-ui/core';
import {
    makeStyles
} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

const FloatingButton = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Fab onClick={props.add} color="primary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </div>
    )
}

export default FloatingButton;