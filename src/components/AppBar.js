import React, {Component} from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    Badge,
    MenuItem
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const TopBar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    edge="start"
                    color="inherit"
                    aria-label="Menu"
                    onClick={props.handleDrawer}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Sites
                </Typography>

                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar;