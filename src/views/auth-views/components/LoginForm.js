import React, { useState, useEffect } from 'react';
import { Button, Input, message, Alert } from "antd";
import { useHistory } from "react-router-dom";
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import {ReactComponent as Error} from '../../../components/shared-components/svgs/error.svg';
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../../redux/actions/Auth'
import { getProfileData } from "redux/actions/Profile";
import axios from 'axios';

export default function LoginForm() {
	let history = useHistory();
	const dispatch = useDispatch();

	let fireBaseId = "idddddd05127004107";
	let language = "ar";

	const { isAuthenticated, token, error, loading } = useSelector(state => state.ownerAuth)

	const [formValues, setFormValues] = useState({})
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [formErrors, setFormErrors] = useState({})
	const [alertError, setAlertError] = useState('')

	const validate = (values) => {
		const errors = {}
		if (!values.email) {
      errors.email = "Email address is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
		return errors;
	}

	useEffect(() => {
		setFormValues({
			email, 
			password,
			fireBaseId,
			language
		})
	}, [email, password, fireBaseId, language])

	const handleSubmit = (e) => {
    e.preventDefault()
		setFormErrors(validate(formValues));
    if (formValues.email !== '' && formValues.password !== '') {
			dispatch(login(formValues))
		}
  }

	useEffect(() => {
		if (isAuthenticated) {
			message.success('Logged in successfully')
			axios.defaults.headers.common['X-Auth-Token'] = token
			localStorage.setItem('HaressOwnerjwtToken', token)
			dispatch(getProfileData())
			history.push(`${APP_PREFIX_PATH}/app/home`)
		}
		if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
	}, [dispatch, isAuthenticated, error, history, token])

	return (
		<>
			<div className="create-form">
				<div className={`input ${formErrors.email && 'error'}`}>
					<label htmlFor="name">Email</label>
					<Input
						id='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Error className='error-sign' />
					<small>{formErrors.email}</small>
				</div>

				<div className={`input svg-input ${formErrors.password && 'error'}`}>
					<label htmlFor="name">Password</label>
					<Input.Password
						id='password'
						name='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Error className='error-sign' />
					<small>{formErrors.password}</small>
				</div>

				{alertError && <Alert className='mb-1' message={`${alertError}`} type="error" showIcon />}

				<Button 
					className='submit-btn' 
					type="primary" 
					htmlType="submit"
					onClick={handleSubmit}
					loading={loading ? true : false}
				>
					Sign in
				</Button>
			</div>
		</>
	)
}
