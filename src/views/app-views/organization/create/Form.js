import React, { useState } from 'react'
import { Col, Row, Input, InputNumber, Button, DatePicker, Select, Switch } from 'antd'
import { 
  CloudUploadOutlined
} from '@ant-design/icons';

const { Option } = Select
const dateFormat = 'YYYY/MM/DD'

export default function Form() {
  const [packageType, setPackageType] = useState('')
  const [phonePrefix, setPhonePrefix] = useState('')
  const [mobNumber, setMobNumber] = useState('')
  const [contractStartDate, setContractStartDate] = useState('')
  const [inputValues, setInputValues] = useState({
    organizationName: '',
    represetitiveName: '',
    represetitivePosition: '',
    email: '',
    PONumber: '',
    username: '',
    password: ''
  })

  const handlePackageChange = (value) => {
    setPackageType(value)
  }
  const handlePhonePrefixChange = (value) => {
    setPhonePrefix(value);
  }
  const handleMobNumberChange = (e) => {
    setMobNumber(e.target.value);
    console.log(mobNumber);
  }
  const onDateChange = (date, dateString) => {
    console.log(dateString);
  };
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputValues({ ...inputValues, [name]: value })
  }
// ssh key
  const handleSubmit = (e) => {
    e.preventDefault()
    const formValues = {
      ...inputValues,
      packageType,
      contractStartDate
    }
    console.log(formValues);
  }

  const prefixSelector = (
    <Select
      onChange={handlePhonePrefixChange}
      style={{
        width: 70,
      }}
    >
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  );

  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className="input">
            <label htmlFor="organizationName">Organization Name</label>
            <Input
              id='organizationName'
              name='organizationName'
              value={inputValues.organizationName}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="represetitiveName">Represetitive Name</label>
            <Input
              id='represetitiveName'
              name='represetitiveName'
              value={inputValues.represetitiveName}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="represetitivePosition">Represetitive Position</label>
            <Input
              id='represetitivePosition'
              name='represetitivePosition'
              value={inputValues.represetitivePosition}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Phone Number</label>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              value={mobNumber}
              onChange={handleMobNumberChange}
              addonBefore={prefixSelector} 
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="email">Email Address</label>
            <Input
              id='email'
              name='email'
              value={inputValues.email}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="PONumber">PO Number</label>
            <InputNumber
              id='PONumber'
              name='PONumber'
              value={inputValues.PONumber}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="packageType">Package Type</label>
            <Select
              dropdownAlign={{ offset: [0, 8] }}
              id='packageType'
              // name='packageType'
              // value={inputValues.packageType}
              onChange={handlePackageChange}
            >
              <Option value='Platinum'>Platinum</Option>
              <Option value='Golden'>Golden</Option>
              <Option value='Silver'>Silver</Option>
              <Option value='Free-access'>Free-access</Option>
            </Select>
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="contractStartDate">Contract Start Date</label>
            <DatePicker
              format={dateFormat}
              className='small w-100 mx-0'
              id='contractStartDate'
              // name='contractStartDate'
              // value={inputValues.contractStartDate}
              onChange={onDateChange}
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="username">Username</label>
            <Input
              id='username'
              name='username'
              value={inputValues.username}
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="password">Password</label>
            <Input.Password
              id='password' 
              name='password'
              value={inputValues.password}
              onChange={handleChange}
            />
          </div>
        </Col>

        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col span={6}>
              <div className="input is-active">
                <label htmlFor="">Is Active</label>
                <Switch defaultChecked />
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
