import React, { useState, useEffect } from 'react'
import { Col, Row, Input, InputNumber, Button, DatePicker, Select, Switch } from 'antd'
import { 
  CloudUploadOutlined
} from '@ant-design/icons';
import countries from 'configs/countries';
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';

const { Option } = Select
const dateFormat = 'YYYY/MM/DD'

export default function Form() {
  const [formValues, setFormValues] = useState()
  const [packageType, setPackageType] = useState('')
  const [PONumber, setPONumber] = useState('')
  const [phonePrefix, setPhonePrefix] = useState('966')
  const [mobNumber, setMobNumber] = useState('')
  const [contractStartDate, setContractStartDate] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [inputValues, setInputValues] = useState({
    organizationName: '',
    represetitiveName: '',
    represetitivePosition: '',
    email: '',
    username: '',
    password: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handlePackageChange = (value) => {
    setPackageType(value)
  }
  const handlePONumberChange = (value) => {
    setPONumber(value)
  }
  const handlePhonePrefixChange = (value) => {
    setPhonePrefix(value);
  }
  const handleMobNumberChange = (e) => {
    setMobNumber(e.target.value);
  }
  const onDateChange = (date, dateString) => {
    setContractStartDate(dateString)
  };
  const onIsActive = (value) => {
    setIsActive(value)
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputValues({ ...inputValues, [name]: value })
  }
  useEffect(() => {
    setFormValues({
      ...inputValues,
      PONumber,
      packageType,
      contractStartDate,
      phoneNumber: `+${phonePrefix}${mobNumber}`,
      isActive
    })
  }, [inputValues, PONumber, packageType, contractStartDate, phonePrefix, mobNumber, isActive])

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
    if (!values.organizationName) {
      errors.organizationName = "Organization name is required!";
    }
    if (!values.represetitiveName) {
      errors.represetitiveName = "Represetitive name is required!";
    }
    if (!values.represetitivePosition) {
      errors.represetitivePosition = "Represetitive position is required!";
    }
    if (!mobNumber) {
      errors.mobNumber = "Phone number is required!";
    }
    if (!values.email) {
      errors.email = "Email address is required!";
    }
    if (!values.PONumber) {
      errors.PONumber = "PO Number is required!";
    }
    if (!values.packageType) {
      errors.packageType = "Package type is required!";
    }
    if (!values.contractStartDate) {
      errors.contractStartDate = "Contract start date is required!";
    }
    if (!values.username) {
      errors.username = "username is required!";
    }
    if (!values.password) {
      errors.password = "password is required!";
    }
    return errors;
  }

  const prefixSelector = (
    <Select
      defaultValue='+966'
      onChange={handlePhonePrefixChange}
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) =>
                  option.children
                    .toString()
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
    >
      {countries &&
        countries.map((e, i) => (
          <Option key={i} value={e.code}>
            <span
              className={`flag-icon flag-icon-${e.iso2.toLowerCase()} mr-2`}
            ></span>
            {`+${e.code}`}
          </Option>
        ))}
    </Select>
  );

  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className={`input ${formErrors.organizationName && 'error'}`}>
            <label htmlFor="organizationName">Organization Name</label>
            <div>
              <Input
                id='organizationName'
                name='organizationName'
                value={inputValues.organizationName}
                onChange={handleChange}
              />
            </div>
            <Error className='error-sign' />
            <small>{formErrors.organizationName}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.represetitiveName && 'error'}`}>
            <label htmlFor="represetitiveName">Represetitive Name</label>
            <Input
              id='represetitiveName'
              name='represetitiveName'
              value={inputValues.represetitiveName}
              onChange={handleChange}
            />
            <Error className='error-sign' />
            <small>{formErrors.represetitiveName}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.represetitivePosition && 'error'}`}>
            <label htmlFor="represetitivePosition">Represetitive Position</label>
            <Input
              id='represetitivePosition'
              name='represetitivePosition'
              value={inputValues.represetitivePosition}
              onChange={handleChange}
            />
            <Error className='error-sign' />
            <small>{formErrors.represetitivePosition}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.mobNumber && 'error'}`}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              value={mobNumber}
              onChange={handleMobNumberChange}
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
              value={inputValues.email}
              onChange={handleChange}
            />
            <Error className='error-sign' />
            <small>{formErrors.email}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.PONumber && 'error'}`}>
            <label htmlFor="PONumber">PO Number</label>
            <InputNumber
              id='PONumber'
              name='PONumber'
              value={PONumber}
              onChange={handlePONumberChange}
            />
            <Error className='error-sign' />
            <small>{formErrors.PONumber}</small>
          </div>
        </Col>
        <Col span={12}>
          <div className={`input svg-input ${formErrors.packageType && 'error'}`}>
            <label htmlFor="packageType">Package Type</label>
            <Select
              dropdownAlign={{ offset: [0, 8] }}
              id='packageType'
              onChange={handlePackageChange}
            >
              <Option value='Platinum'>Platinum</Option>
              <Option value='Golden'>Golden</Option>
              <Option value='Silver'>Silver</Option>
              <Option value='Free-access'>Free-access</Option>
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.packageType}</small>
          </div>
        </Col>
        <Col span={12}>
          <div className={`input svg-input ${formErrors.contractStartDate && 'error'}`}>
            <label htmlFor="contractStartDate">Contract Start Date</label>
            <DatePicker
              placeholder=''
              format={dateFormat}
              className='small w-100 mx-0'
              id='contractStartDate'
              onChange={onDateChange}
            />
            <Error className='error-sign' />
            <small>{formErrors.contractStartDate}</small>
          </div>
        </Col>
        <Col span={12}>
          <div className={`input ${formErrors.username && 'error'}`}>
            <label htmlFor="username">Username</label>
            <Input
              id='username'
              name='username'
              value={inputValues.username}
              onChange={handleChange}
            />
            <Error className='error-sign' />
            <small>{formErrors.username}</small>
          </div>
        </Col>
        <Col span={12}>
          <div className={`input svg-input ${formErrors.password && 'error'}`}>
            <label htmlFor="password">Password</label>
            <Input.Password
              id='password' 
              name='password'
              value={inputValues.password}
              onChange={handleChange}
            />
            <Error className='error-sign' />
            <small>{formErrors.password}</small>
          </div>
        </Col>

        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col span={6}>
              <div className="input is-active">
                <label htmlFor="">Is Active</label>
                <Switch onChange={onIsActive} />
              </div>
            </Col>
            <Col span={6}>
              <div className="input file">
                <input type="file" id="file" />
                <label class="file" for="file">
                  <p>Attach a file</p>
                  <CloudUploadOutlined />
                </label>
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
                Create new organization
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
