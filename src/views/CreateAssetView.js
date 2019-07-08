import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Input from '../components/Input';

import {Paper, Button} from '@material-ui/core'
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
    ViewList,
    LocationOn,
    WebAsset,
} from '@material-ui/icons'

import logo from '../assets/img/titan_logo_250.png';

import {
    logout
} from '../actions/auth';

import {
    getAssetFormOptions,
} from '../actions/assets'


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
    marginBottom: theme.spacing(8),
    padding: theme.spacing(3),
    width: '100vw',
  },
  fabPosition: {
    position: 'fixed',
    bottom: '15px',
    right: '15px',
  }
}));


class CreateAssetView extends Component {

    state = {
        formData: {}
    }

    componentWillMount = ()=> {
        this.props.getAssetFormOptions()
    }

    handleDate = (date, name) => {
        let formData = {...this.state.formData};
        formData[name] = date;
        this.setState({
            formData
        })
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let formData = {...this.state.formData}
        formData[name] = value
        this.setState({
            formData
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = this.state.formData
        this.props.createSite(formData, this.props.history)
    }

    handleLogout = () => {
        this.props.logout(this.props)
    }

    render() {
        const {formOptions} = this.props
        const form = Object.values(formOptions).map((item, index) => {
            return (
                <Input 
                    key={index} 
                    item={item}
                    onChange={this.handleChange}
                    error={null}
                    handleDate={this.handleDate}
                    selectedData={this.state.formData}
                />
            )
        })
        return (
            <ResponsiveDrawer
                form={form}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                logout={this.handleLogout}
                route = {this.props.history}
                sites={this.props.sites}
            />
            // <Paper className="form-wrapper p3">
            //     <form onSubmit={this.handleSubmit}>
            //         {form}
            //         <Button 
            //             variant="contained" 
            //             color="primary" 
            //             type="submit"
            //             className="mt3 login-form-item"
            //         >
            //             CREATE
            //         </Button>
            //     </form>
            // </Paper>
        )
    }
}

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
              props.route.push('/sites')
          }}>
              <ListItemIcon><LocationOn /></ListItemIcon>
              <ListItemText primary="Sites" />
          </ListItem>
          <ListItem button onClick={()=>{
              props.route.push('/assets')
          }}>
              <ListItemIcon><WebAsset /></ListItemIcon>
              <ListItemText primary="Assets" />
          </ListItem>
          <ListItem button onClick={()=>{
              props.route.push('/jobs')
          }}>
              <ListItemIcon><ViewList /></ListItemIcon>
              <ListItemText primary="Jobs" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={()=>{
              props.route.push('/notifications')
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
              Sites
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
          <Paper className="form-wrapper p3">
                <form onSubmit={props.handleSubmit}>
                    {props.form}
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                        className="mt3 login-form-item"
                    >
                        CREATE
                    </Button>
                </form>
            </Paper>
        </main>
      </div>
    );
  }

const mapStateToProps = state => ({
    formOptions: state.assets.assetFormOptions,
    result: state.sites.createResult
})

const mapActionsToProps = {
    getAssetFormOptions,
    logout,
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(CreateAssetView))