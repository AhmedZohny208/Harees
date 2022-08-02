import React from 'react';
import { connect } from "react-redux";
import { Button, Form, Input, message } from "antd";
import PropTypes from 'prop-types';
import {  
	showLoading, 
	showAuthMessage, 
	hideAuthMessage,
	authenticated
} from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export const LoginForm = () => {
	let history = useHistory();

	const onLogin = values => {
		message.success('Logged in successfully')
		localStorage.setItem('role', values.email)
		history.push(`${APP_PREFIX_PATH}`)
		console.log(values);
	};

	return (
		<>
			<Form 
				layout="vertical" 
				name="login-form"
				onFinish={onLogin}
			>
				<Form.Item 
					name="email" 
					label="Email" 
				>
					<Input />
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password" 
				>
					<Input.Password />
				</Form.Item>
				<Form.Item>
					<Button 
						className='submit-btn' 
						type="primary" 
						htmlType="submit" 
					>
						Sign In
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

LoginForm.propTypes = {
	otherSignIn: PropTypes.bool,
	showForgetPassword: PropTypes.bool,
	extra: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
};

LoginForm.defaultProps = {
	otherSignIn: true,
	showForgetPassword: false
};

const mapStateToProps = ({auth}) => {
	const {loading, message, showMessage, token, redirect} = auth;
  	return {loading, message, showMessage, token, redirect}
}

const mapDispatchToProps = {
	showAuthMessage,
	showLoading,
	hideAuthMessage,
	authenticated
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
