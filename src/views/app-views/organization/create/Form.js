import React, { useState } from 'react'
import { Col, Row, Input, InputNumber, Button, DatePicker, Select, Switch } from 'antd'
import { 
  CloudUploadOutlined
} from '@ant-design/icons';
import countries from 'configs/countries';

const { Option } = Select
const dateFormat = 'YYYY/MM/DD'

export default function Form() {
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const formValues = {
      ...inputValues,
      PONumber,
      packageType,
      contractStartDate,
      phoneNumber: `+${phonePrefix}${mobNumber}`,
      isActive
    }
    console.log(formValues);
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
              value={PONumber}
              onChange={handlePONumberChange}
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
              placeholder=''
              format={dateFormat}
              className='small w-100 mx-0'
              id='contractStartDate'
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
