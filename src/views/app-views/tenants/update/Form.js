import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Select } from 'antd'
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import PrefixSelector from 'components/shared-components/PrefixSelector';

const { Option } = Select

export default function Form() {
  const [formValues, setFormValues] = useState()
  const [tenantName, setTenantName] = useState('Abdulrhman Mohamed')
  const [address, setAddress] = useState('')
  const [unitID, setUnitID] = useState('A13')
  const [compoundName, setCompoundName] = useState('Building 71')
  const [phonePrefix, setPhonePrefix] = useState('966')
  const [mobNumber, setMobNumber] = useState('68025731')
  const [email, setEmail] = useState('a.mohamed@gmail.com')
  const [username, setUserName] = useState('a.mohamed@gmail.com')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const prefixSelector = <PrefixSelector setPrefix={setPhonePrefix} />

  useEffect(() => {
    setFormValues({
      tenantName, 
      address, 
      unitID,
      compoundName,
      phoneNumber: `+${phonePrefix}${mobNumber}`,
      email,
      username
    })
  }, [tenantName, address, unitID, compoundName, phonePrefix, mobNumber, email, username])

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
    if (!values.tenantName) {
      errors.tenantName = "Tenant name is required!";
    }
    if (!values.unitID) {
      errors.unitID = "Unit ID is required!";
    }
    if (!values.compoundName) {
      errors.compoundName = "Compound name is required!";
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
        <Col span={8}>
          <div className={`input ${formErrors.tenantName && 'error'}`}>
            <label htmlFor="tenantName">Name</label>
            <Input
              id='tenantName'
              name='tenantName'
              value={tenantName}
              onChange={(e) => setTenantName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.tenantName}</small>
          </div>
        </Col>
        <Col span={16}>
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
        <Col span={8}>
          <div className={`input svg-input ${formErrors.unitID && 'error'}`}>
            <label htmlFor="unitID">Unit ID</label>
            <Select
              dropdownAlign={{ offset: [0, 8] }}
              onChange={(val) => setUnitID(val)}
              value={unitID}
            >
              <Option value='A13'>A13</Option>
              <Option value='B1-11'>B1-11</Option>
              <Option value='B12-12'>B12-12</Option>
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.unitID}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input svg-input ${formErrors.compoundName && 'error'}`}>
            <label htmlFor="compoundName">Compound</label>
            <Select
              dropdownAlign={{ offset: [0, 8] }}
              onChange={(val) => setCompoundName(val)}
              value={compoundName}
            >
              <Option value='Building 71'>Building 71</Option>
              <Option value='Building 02'>Building 02</Option>
              <Option value='Building 01'>Building 01</Option>
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.compoundName}</small>
          </div>
        </Col>
        <Col span={8}>
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
        <Col span={8}>
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
        <Col span={8}>
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
          <Row justify="end">
            <Col span={6}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={handleSubmit}
              >
                Update tenant
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
