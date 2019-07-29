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
    getAsset,
    getAssetFormOptions,
    updateAsset,
    deleteAsset
} from '../actions/assets';

import InputUpdate from '../components/InputUpdate';
import { ChevronLeft, Delete } from '@material-ui/icons';

class UpdateAssetView extends Component {

    state = {
        formData: {},
        modal: false,
        message: '',
        title: '',
    }

    componentWillMount = () => {
        const id = this.props.match.params.id
        this.props.getAsset(id);
        this.props.getAssetFormOptions();
    }

    handleSubmit = () => {
        const id = this.props.match.params.id
        const formData = this.state.formData
        const route = this.props.history
        this.props.updateAsset(id, formData, route)
    }

    handleDelete = () => {
        this.setState({
            modal: true,
            message: 'Are you sure you want to delete this asset?',
            title: 'Please confirm',
        })
    }

    handleConfirm = () => {
        const id = this.props.match.params.id
        const route = this.props.history
        this.setState({
            modal: false
        })
        this.props.deleteAsset(id, route)
    }
    
    render () {
        const {asset, loading, formOptions, result} = this.props
        const form = Object.values(formOptions).map((item, index) => {
            return (
                <InputUpdate 
                  key={index} 
                  item={item}
                  onChange={this.handleChange}
                  error={result}
                  asset={asset}
                  onChecked={this.handleCheck}
                  formData={this.state.formData}
                  options={this.props.siteOptions}
                />
            )
        })
        return (
            <div>
                <ResponsiveDrawer 
                    title='Assets'
                    content={loading?
                        <div>
                            <CircularProgress />
                        </div> :
                        <div>
                            <div className="header-container">
                                <IconButton 
                                    onClick={()=>this.props.history.push('/assets')}
                                >
                                    <ChevronLeft/>
                                </IconButton>
                                <Typography variant="h6" gutterBottom>
                                    Asset number: {asset.asset_serial_number}
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
                    handleClose={this.handleConfirm}
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
    asset: state.assets.asset,
    loading: state.assets.loading,
    formOptions: state.assets.assetFormOptions,
    result: state.assets.createResult,
    updateResult: state.assets.updateResult
})

const mapActionsToProps = {
    getAsset,
    updateAsset,
    getAssetFormOptions,
    deleteAsset
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(UpdateAssetView))