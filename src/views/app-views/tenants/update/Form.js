import React from 'react'
import { Col, Row, Input, Button, Select } from 'antd'

const { Option } = Select

const prefixSelector = (
  <Select
    defaultValue='+966'
    style={{
      width: 80,
    }}
  >
    <Option value="86">+86</Option>
    <Option value="87">+87</Option>
  </Select>
);

export default function Form() {
  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Name</label>
            <Input defaultValue='Abdulrhman Mohamed'/>
          </div>
        </Col>
        <Col span={16}>
          <div className="input">
            <label htmlFor="">Address</label>
            <Input/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Unit ID</label>
            <Select
              defaultValue='A13'
              dropdownAlign={{ offset: [0, 8] }}
            >
              <Option value='A13'>A13</Option>
              <Option value='B1-11'>B1-11</Option>
              <Option value='B12-12'>B12-12</Option>
            </Select>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Compound</label>
            <Select
              defaultValue='Building 71'
              dropdownAlign={{ offset: [0, 8] }}
            >
              <Option value='Building 71'>Building 71</Option>
              <Option value='Building 02'>Building 02</Option>
              <Option value='Building 01'>Building 01</Option>
            </Select>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Phone Number</label>
            <Input defaultValue='68025731' addonBefore={prefixSelector} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <Input defaultValue='a.mohamed@gmail.com'/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Username</label>
            <Input defaultValue='a.mohamed@gmail.com'/>
          </div>
        </Col>

        <Col span={24}>
          <Row justify="end">
            <Col span={6}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
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
