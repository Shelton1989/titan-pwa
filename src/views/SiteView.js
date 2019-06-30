import React, {Component} from 'react';

import TopBar from '../components/AppBar';
import AppDrawer from '../components/AppDrawer';

class SiteView extends Component {
    state = {
        drawerOpen: false
    }

    handleDrawer = () => {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        })
    }

    render() {
        return (
            <div>
                <TopBar handleDrawer={this.handleDrawer} />
                <AppDrawer open={this.state.drawerOpen} />
            </div>
        )
    }
}

export default SiteView;