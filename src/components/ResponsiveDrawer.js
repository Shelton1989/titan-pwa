import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    Lock,
    Notifications,
    LocationOn,
    WebAsset,
} from '@material-ui/icons'

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// Redux actions
import {
    logout
} from '../actions/auth';

import logo from '../assets/img/titan_logo_250.png';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(8),
    width: '100vw',
  },
  fabPosition: {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
  }
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    function handleDrawerToggle() {
      setMobileOpen(!mobileOpen);
    }
  
    const drawer = (
      <div>
        <div className={(classes.toolbar + " logo")} style={{backgroundImage: `url(${logo})`, margin: 'auto'}}>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={()=>{
              props.history.push('/sites')
          }}>
              <ListItemIcon><LocationOn /></ListItemIcon>
              <ListItemText primary="Sites" />
          </ListItem>
          <ListItem button onClick={()=>{
              props.history.push('/assets')
          }}>
              <ListItemIcon><WebAsset /></ListItemIcon>
              <ListItemText primary="Assets" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={()=>{
              props.history.push('/notifications')
          }}>
              <ListItemIcon><Notifications /></ListItemIcon>
              <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button onClick={props.logout}>
              <ListItemIcon><Lock /></ListItemIcon>
              <ListItemText primary="Sign Out" />
          </ListItem>
        </List>
      </div>
    );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.content}
      </main>
    </div>
  );
}

const mapStateToProps = state => ({

});

const mapActionsToProps = {
    logout,
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(ResponsiveDrawer));
