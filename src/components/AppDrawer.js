import React, {Component} from 'react';
import { Drawer, Typography } from '@material-ui/core';

const AppDrawer = (props) => {
    return (
        <Drawer
            open={props.open}
        >
            <Typography variant="body1">
                This is a test for the drawer
            </Typography>
        </Drawer>
    )
}

export default AppDrawer;