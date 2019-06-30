import React, {
	Component
} from 'react';

import LoginForm from './../components/LoginForm';

class LoginView extends Component {
	state = {
		username: '',
		password: ''
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.username, this.state.password)
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

export default LoginView;