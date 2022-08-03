import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button } from 'antd'
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import PrefixSelector from 'components/shared-components/PrefixSelector';

export default function Form() {
  const [formValues, setFormValues] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phonePrefix, setPhonePrefix] = useState('966')
  const [mobNumber, setMobNumber] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const prefixSelector = <PrefixSelector setPrefix={setPhonePrefix} />

  useEffect(() => {
    setFormValues({
      name, 
      email, 
      phoneNumber: `+${phonePrefix}${mobNumber}`,
    })
  }, [name, email, phonePrefix, mobNumber])

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
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email address is required!";
    }
    if (!mobNumber) {
      errors.mobNumber = "Phone number is required!";
    }
    return errors;
  }
  
  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={24}>
          <div className={`input ${formErrors.name && 'error'}`}>
            <label htmlFor="name">Full Name</label>
            <Input
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.name}</small>
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
          <Row justify="end">
            <Col span={24}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={handleSubmit}
              >
                Create new operator
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
