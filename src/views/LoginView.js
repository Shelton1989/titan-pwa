import React, {
	Component
} from 'react';

import LoginForm from './../components/LoginForm';
import FeedBackModal from './../components/Modal';

import {
    login,
} from '../actions/auth';

import {
	connect,
} from 'react-redux';

import {withRouter} from 'react-router-dom';

class LoginView extends Component {
	state = {
		username: '',
		password: '',
		modal: false,
		message: '',
		title: 'Please wait',
	}

	handleModalTitle = () => {
		this.setState({
			title: 'Authentication Error'
		})
	}

	handleClose = () => {
		this.setState({
			modal: false
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			title: 'Please wait',
			modal: true,
		})
		let formData = {
			"username": this.state.username,
			"password": this.state.password
		};
		this.props.login(formData, this.props, this.handleModalTitle);
		// this.props.history.push("/sites")
	}

	handleUsername = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	handlePassword = (e) => {
		this.setState({
			password: e.target.value
		})
	}

	render() {
		return (
			<div className='login-wrapper'>
				<div className="horizontal-wrapper">
					<LoginForm 
						handleSubmit={this.handleSubmit}
						handleUsername={this.handleUsername}
						handlePassword={this.handlePassword}
					/>
				</div>
				<FeedBackModal
					loading={this.props.attemptingLogin}
					open={this.state.modal}
					message={this.state.message}
					title={this.state.title}
					handleClose={this.handleClose}
					errorTitle={this.state.title}
					error={this.props.error}
				/>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	auth: state.auth.authenticated,
	attemptingLogin: state.auth.attempting_login,
	error: state.auth.error
})

const mapActionsToProps = {
	login: login
}

export default withRouter(connect(mapStateToProps, mapActionsToProps)(LoginView));