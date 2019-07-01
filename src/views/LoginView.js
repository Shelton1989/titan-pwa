import React, {
	Component
} from 'react';

import LoginForm from './../components/LoginForm';

import {
    login,
} from '../actions/auth';

import {
	connect,
} from 'react-redux';

class LoginView extends Component {
	state = {
		username: '',
		password: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		let formData = {
			"username": this.state.username,
			"password": this.state.password
		};
		this.props.login(formData);
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
				<LoginForm 
					handleSubmit={this.handleSubmit}
					handleUsername={this.handleUsername}
					handlePassword={this.handlePassword}
				/>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	auth: state.auth.authenticated
})

const mapActionsToProps = {
	login: login
}

export default connect(mapStateToProps, mapActionsToProps)(LoginView);