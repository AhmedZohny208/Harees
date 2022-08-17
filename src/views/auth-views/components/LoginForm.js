import React from 'react';
import { Button, Form, Input, message } from "antd";
import { useHistory } from "react-router-dom";
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export default function LoginForm() {
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
