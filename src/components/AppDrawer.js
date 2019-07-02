import React, {Component} from 'react';
import { 
    Drawer, 
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Card
} from '@material-ui/core';

import {NavLink} from 'react-router-dom'

const AppDrawer = (props) => {
    return (
        <Drawer
            open={props.open}
        >
            <List Component="nav">
            <NavLink to="/sites">
                            Sites
                    </NavLink>
                <ListItem
                    button
                    // onClick={props.history.push('')}
                >
                    <ListItemText>
                        
                    </ListItemText>
                </ListItem>

                <ListItem
                    button
                    // onClick={props.history.push('')}
                >
                    <ListItemText>
                        <NavLink to="/assets">
                            Assets
                        </NavLink>
                    </ListItemText>
                </ListItem>
            </List>
        </Drawer>
    )
}

export default AppDrawer;