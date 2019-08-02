import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import ResponsiveDrawer from '../components/ResponsiveDrawer';
import Modal from '../components/Modal';

import {
    Paper,
    Typography,
    CircularProgress,
    Button,
    IconButton
} from '@material-ui/core';

import { connect } from 'react-redux';

import {
    getSiteOptions,
} from '../actions/sites'

import InputUpdate from '../components/InputUpdate';
import { ChevronLeft, Delete } from '@material-ui/icons';

class UpdateSiteView extends Component {

    state = {

    }

    componentWillMount = () => {

    }

    render () {
        return (
            <div>
                Site
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapActionsToProps = {

}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(UpdateSiteView))