import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, message, Alert } from 'antd'
import { useHistory } from "react-router-dom";
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import PrefixSelector from 'components/shared-components/PrefixSelector';
import { useDispatch, useSelector } from 'react-redux'
import { registerSupervisor, clearErrors } from 'redux/actions/Supervisor'
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { CREATE_SUPERVISOR_RESET } from 'redux/constants/Supervisor';

export default function Form() {
  let history = useHistory();
  const dispatch = useDispatch();

  const { supervisor, error, loading } = useSelector(state => state.registerSupervisor);

  const [formValues, setFormValues] = useState()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phonePrefix, setPhonePrefix] = useState('966')
  const [mobNumber, setMobNumber] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [alertError, setAlertError] = useState('')

  const prefixSelector = <PrefixSelector setPrefix={setPhonePrefix} />

  useEffect(() => {
    if (supervisor) {
      setAlertError('')
      message.success('Record has been created successfully')
      history.push(`${APP_PREFIX_PATH}/supervisors`)
      dispatch({ type: CREATE_SUPERVISOR_RESET })
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, supervisor])

  useEffect(() => {
    setFormValues({
      fullName, 
      email, 
      phone: `+${phonePrefix}${mobNumber}`,
    })
  }, [fullName, phonePrefix, mobNumber, email])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    if (formValues.fullName !== '' && formValues.email !== '') {
      dispatch(registerSupervisor(formValues))
    }
  }

  const validate = (values) => {
    const errors = {}
    if (!values.fullName) {
      errors.fullName = "Supervisor name is required!";
    }
    if (!mobNumber) {
      errors.mobNumber = "Phone number is required!";
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
          <div className={`input ${formErrors.mobNumber && 'error'}`}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              value={mobNumber}
              onChange={(e) => setMobNumber(e.target.value)}
              addonBefore={prefixSelector} 
            />
            <Error className='error-sign' />
            <small>{formErrors.mobNumber}</small>
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
            Add new supervisor
          </Button>
        </Col>
      </Row>
    </div>
  )
}
