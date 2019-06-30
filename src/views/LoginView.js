import React, {
	Component
} from 'react';

import LoginForm from './../components/LoginForm';

class LoginView extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('login action')
	}

	render() {
		return (
			<div className='login-wrapper'>
				<LoginForm />
			</div>
		)
	}
};

export default LoginView;