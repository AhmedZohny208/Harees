import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, message, Alert } from 'antd'
import { useHistory } from "react-router-dom";
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import { useDispatch, useSelector } from 'react-redux'
import { updateSupervisor, getSupervisorDetails, clearErrors } from 'redux/actions/Supervisor'
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { UPDATE_SUPERVISOR_RESET } from 'redux/constants/Supervisor';

export default function Form({id}) {
  let history = useHistory();
  const dispatch = useDispatch();

  const { supervisor } = useSelector(state => state.supervisorDetails)
  const { isUpdated, error, loading } = useSelector(state => state.Supervisor);

  const [formValues, setFormValues] = useState()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [alertError, setAlertError] = useState('')

  useEffect(() => {
    dispatch(getSupervisorDetails(id))
  }, [id])

  useEffect(() => {
    if (supervisor) {
      setFullName(supervisor.fullName)
      setEmail(supervisor.email)
      setPhone(supervisor.phone)
    }
  }, [supervisor])

  useEffect(() => {
    if (isUpdated) {
      setAlertError('')
      message.success('Record has been updated successfully')
      history.push(`${APP_PREFIX_PATH}/supervisors`)
      dispatch({ type: UPDATE_SUPERVISOR_RESET })
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, isUpdated])

  useEffect(() => {
    setFormValues({
      fullName, 
      email, 
      phone
    })
  }, [fullName, email, phone])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    if (formValues.fullName !== '' && formValues.email !== '') {
      dispatch(updateSupervisor(id, formValues))
    }
  }

  const validate = (values) => {
    const errors = {}
    if (!values.fullName) {
      errors.fullName = "Supervisor name is required!";
    }
    if (!phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={24}>
          <div className={`input ${formErrors.fullName && 'error'}`}>
            <label htmlFor="fullName">Name</label>
            <Input
              id='fullName'
              name='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.fullName}</small>
          </div>
        </Col>
        <Col span={24}>
          <div className={`input ${formErrors.phone && 'error'}`}>
            <label htmlFor="phone">Phone Number</label>
            <Input
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.phone}</small>
          </div>
        </Col>
        <Col span={24}>
          <div className={`input ${formErrors.email && 'error'}`}>
            <label htmlFor="email">Email Address</label>
            <Input
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.email}</small>
          </div>
        </Col>
        <Col span={24}>
          {alertError && <Alert message={`${alertError}`} type="error" showIcon />}
        </Col>
        <Col span={24}>
          <Button 
            className='submit-btn' 
            type="primary" 
            htmlType="submit"
            onClick={handleSubmit}
            loading={loading ? true : false}
          >
            Update supervisor
          </Button>
        </Col>
      </Row>
    </div>
  )
}
