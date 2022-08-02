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
        <Col span={12}>
          <div className="input">
            <label htmlFor="">Name</label>
            <Input defaultValue='Mohamed Alaa'/>
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="">Phone Number</label>
            <Input defaultValue='68025731' addonBefore={prefixSelector} />
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="">E-mail Address</label>
            <Input defaultValue='k.bommini@gmail.com'/>
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="">Username</label>
            <Input defaultValue='k.bommini@gmail.com'/>
          </div>
        </Col>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Address</label>
            <Input defaultValue='western region, Riyad city, 09 nahda street, 1st floor'/>
          </div>
        </Col>
        <Col span={24}>
          <Row justify="end">
            <Col span={8}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
              >
                Update supervisor
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
