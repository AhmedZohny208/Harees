import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button } from 'antd'
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import PrefixSelector from 'components/shared-components/PrefixSelector';

export default function Form() {
  const [formValues, setFormValues] = useState()
  const [supervisorName, setSupervisorName] = useState('')
  const [address, setAddress] = useState('')
  const [phonePrefix, setPhonePrefix] = useState('966')
  const [mobNumber, setMobNumber] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const prefixSelector = <PrefixSelector setPrefix={setPhonePrefix} />

  useEffect(() => {
    setFormValues({
      supervisorName, 
      address, 
      phoneNumber: `+${phonePrefix}${mobNumber}`,
      email,
      username
    })
  }, [supervisorName, address, phonePrefix, mobNumber, email, username])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit])

  const validate = (values) => {
    const errors = {}
    if (!values.supervisorName) {
      errors.supervisorName = "Supervisor name is required!";
    }
    if (!mobNumber) {
      errors.mobNumber = "Phone number is required!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={12}>
          <div className={`input ${formErrors.supervisorName && 'error'}`}>
            <label htmlFor="supervisorName">Name</label>
            <Input
              id='supervisorName'
              name='supervisorName'
              value={supervisorName}
              onChange={(e) => setSupervisorName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.supervisorName}</small>
          </div>
        </Col>
        <Col span={12}>
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
        <Col span={12}>
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
        <Col span={12}>
          <div className={`input ${formErrors.username && 'error'}`}>
            <label htmlFor="username">Username</label>
            <Input
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.username}</small>
          </div>
        </Col>
        <Col span={24}>
          <div className={`input ${formErrors.address && 'error'}`}>
            <label htmlFor="address">Address</label>
            <Input
              id='address'
              name='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.address}</small>
          </div>
        </Col>
        <Col span={24}>
          <Row justify="end">
            <Col span={8}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={handleSubmit}
              >
                Add new supervisor
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
