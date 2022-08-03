import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Select, Switch } from 'antd'
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import PrefixSelector from 'components/shared-components/PrefixSelector';

const { Option } = Select

export default function Form() {
  const [formValues, setFormValues] = useState()
  const [technicianName, setTechnicianName] = useState('')
  const [address, setAddress] = useState('')
  const [teamName, setTeamName] = useState('')
  const [isTeamLead, setIsTeamLead] = useState(false)
  const [phonePrefix, setPhonePrefix] = useState('966')
  const [mobNumber, setMobNumber] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const prefixSelector = <PrefixSelector setPrefix={setPhonePrefix} />

  useEffect(() => {
    setFormValues({
      technicianName, address, teamName, isTeamLead, phonePrefix, mobNumber, email, username
    })
  }, [technicianName, address, teamName, isTeamLead, phonePrefix, mobNumber, email, username])

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
    if (!values.technicianName) {
      errors.technicianName = "Technician name is required!";
    }
    if (!values.teamName) {
      errors.teamName = "Team name is required!";
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
          <div className={`input ${formErrors.technicianName && 'error'}`}>
            <label htmlFor="technicianName">Name</label>
            <Input
              id='technicianName'
              name='technicianName'
              value={technicianName}
              onChange={(e) => setTechnicianName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.technicianName}</small>
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
          <div className={`input svg-input ${formErrors.teamName && 'error'}`}>
            <label htmlFor="teamName">Team Name</label>
            <Select
              dropdownAlign={{ offset: [0, 8] }}
              onChange={(val) => setTeamName(val)}
            >
              <Option value='Carpentry'>Carpentry</Option>
              <Option value='Electricity'>Electricity</Option>
              <Option value='Security'>Security</Option>
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.teamName}</small>
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

        <Col span={24}>
          <Row gutter={16} justify="space-between" align="bottom">
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
            <Col span={8}>
              <div className="input is-active">
                <label>Team Lead</label>
                <Switch onChange={(val) => setIsTeamLead(val)} />
              </div>
            </Col>
          </Row>
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
                Add new technician
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
