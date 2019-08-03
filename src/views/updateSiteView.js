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
    getSite,
    getSiteFormOptions,
    updateSite,
    deleteSite
} from '../actions/sites';

import InputUpdate from '../components/InputUpdate';
import { ChevronLeft, Delete } from '@material-ui/icons';

class UpdateSiteView extends Component {

    state = {
        formData: {},
        modal: false,
        message: '',
        title: '',
    }

    componentWillMount = () => {
        const id = this.props.match.params.id
        this.props.getSite(id);
        this.props.getSiteFormOptions();
    }

    handleSubmit = () => {
        const id = this.props.match.params.id
        const formData = this.state.formData
        const route = this.props.history
        this.props.updateSite(id, formData, route)
    }

    handleDelete = () => {
        this.setState({
            modal: true,
            message: 'Are you sure you want to delete this asset?',
            title: 'Please confirm',
        })
    }

    handleClose = () => {
        this.setState({
            modal: false,
        })
    }

    handleConfirm = () => {
        const id = this.props.match.params.id
        const route = this.props.history
        this.setState({
            modal: false
        })
        this.props.deleteSite(id, route)
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
    
    render () {
        const {site, loading, formOptions, result} = this.props
        const form = Object.values(formOptions).map((item, index) => {
            return (
                <InputUpdate 
                  key={index} 
                  item={item}
                  onChange={this.handleChange}
                  error={result}
                  asset={site}
                  onChecked={this.handleCheck}
                  formData={this.state.formData}
                  options={this.props.siteOptions}
                />
            )
        })
        return (
            <div>
                <ResponsiveDrawer 
                    title='sites'
                    content={loading?
                        <div>
                            <CircularProgress />
                        </div> :
                        <div>
                            <div className="header-container">
                                <IconButton 
                                    onClick={()=>this.props.history.push('/sites')}
                                >
                                    <ChevronLeft/>
                                </IconButton>
                                <Typography variant="h6" gutterBottom>
                                    Site: {site.title}
                                </Typography>
                                <IconButton
                                    onClick={this.handleDelete}
                                >
                                    <Delete></Delete>
                                </IconButton>
                            </div>
                            <Paper className="form-wrapper p3">
                                <form >
                                    {form}
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        type="submit"
                                        className="mt3 form-item"
                                    >
                                        SAVE
                                    </Button>
                                </form>
                            </Paper>
                        </div>
                        
                    }
                />
                <Modal 
                    handleClose={this.handleClose}
                    handleDelete={this.handleConfirm}
                    message={this.state.message}
                    title={this.state.title}
                    loading={loading}
                    open={this.state.modal}
                    // errorTitle={}
                    // error={}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site: state.sites.site,
    loading: state.sites.loading,
    formOptions: state.sites.siteFormOptions,
    result: state.sites.deleteResult,
    updateResult: state.sites.updateResult
})

const mapActionsToProps = {
    getSite,
    updateSite,
    getSiteFormOptions,
    deleteSite
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(UpdateSiteView))