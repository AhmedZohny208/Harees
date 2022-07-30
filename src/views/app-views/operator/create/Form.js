import React from 'react'
import { Col, Row, Input, Button, Select } from 'antd'

const { Option } = Select

const prefixSelector = (
  <Select
    style={{
      width: 70,
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
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Full Name</label>
            <Input/>
          </div>
        </Col>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <Input/>
          </div>
        </Col>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Phone Number</label>
            <Input addonBefore={prefixSelector} />
          </div>
        </Col>

        <Col span={24}>
          <Row justify="end">
            <Col span={24}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
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
