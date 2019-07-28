import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import ResponsiveDrawer from '../components/ResponsiveDrawer';

import {
    Paper,
    Typography,
    CircularProgress,
    Button
} from '@material-ui/core';

import { connect } from 'react-redux';

import {
    getAsset,
    getAssetFormOptions
} from '../actions/assets';

import InputUpdate from '../components/InputUpdate';

class UpdateAssetView extends Component {

    state = {
        formData: {}
    }

    componentWillMount = () => {
        const id = this.props.match.params.id
        this.props.getAsset(id);
        this.props.getAssetFormOptions();
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
                  onChecked={this.handleCheck}
                  formData={this.state.formData}
                  options={this.props.siteOptions}
                />
            )
        })
        return (
            <ResponsiveDrawer 
                title='Assets'
                content={loading?
                    <div>
                        <CircularProgress />
                    </div> :
                    <div>
                        <Typography variant="h6" gutterBottom>
                            Asset number: {asset.asset_serial_number}
                        </Typography>
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
        )
    }
}

const mapStateToProps = state => ({
    asset: state.assets.asset,
    loading: state.assets.loading,
    formOptions: state.assets.assetFormOptions,
    result: state.assets.createResult
})

const mapActionsToProps = {
    getAsset,
    getAssetFormOptions
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(UpdateAssetView))